import React, {useRef, useState, useEffect, useLayoutEffect} from 'react';
import clsx from "clsx";
import Icon from "../Icon";
import {useExactHeight, useOnClickOutside} from "../../utils/hook";
import Popup from "../../utils/Popup";

function Dropdown(props) {
    const {onChange, defaultValue, search, disabled, placeholder} = props;
    // const [owner, setOwner] = useState(null);
    const [options, setOptions] = useState(props.options);
    const [currentItem, setCurrentItem] = useState(_.find(props.options, o => o.value === defaultValue));
    const [unfold, setUnfold] = useState(false);//是否展开
    const [inputKey, updateInput] = useState(0);
    const ref = useRef(null);

    const [exactContainerRef, containerRef, updateHeight] = useExactHeight();

    useOnClickOutside(ref, () => {
        close();
        updateInput(x => x + 1);
    })

    useLayoutEffect(() => {
        return updateHeight(unfold)
    }, [unfold, updateHeight])

    useEffect(() => {
        updateInput(x => x + 1);
    }, [currentItem])

    return <div className={clsx('y-dropdown', {unfold, disabled})} onFocus={open} ref={ref}>
        <div className="input-box">
            <div className="search">
                <input type="text" key={inputKey}
                       disabled={disabled}
                       placeholder={placeholder}
                       defaultValue={_.get(currentItem, 'text')}
                       onChange={e => textChange(e.target.value)}/>
            </div>
            <div className="status" onClick={toggle}>
                <Icon name='arrowDown' size={20}/>
            </div>
        </div>
        <Popup owner={ref.current} widthable>
            <div className="popup" ref={exactContainerRef}>
                <div className="popup-inner" ref={containerRef}>
                    <div className="list">
                        {
                            _.isEmpty(options)
                                ? <div className="noList">没有可选内容</div>
                                : _.map(options, (o, i) => {
                                    return <div key={i}
                                                className={clsx({selected: o.text === _.get(currentItem, 'text')}, "item")}
                                                onClick={(e) => handleClick(e, o, o.value)}>
                                        {o.text}
                                    </div>
                                })
                        }
                    </div>
                </div>
            </div>
        </Popup>

        {/*
            <div className="popup" ref={exactContainerRef}>
                <div className="popup-inner" ref={containerRef}>
                    <div className="list">
                        {
                            _.isEmpty(options)
                                ? <div className="noList">没有可选内容</div>
                                : _.map(options, (o, i) => {
                                    return <div key={i}
                                                className={clsx({selected: o.text === _.get(currentItem, 'text')}, "item")}
                                                onClick={(e) => handleClick(e, o, o.value)}>
                                        {o.text}
                                    </div>
                                })
                        }
                    </div>
                </div>
            </div>
        */}
    </div>;

    function handleClick(e, o, v) {
        setCurrentItem(o);
        _.isFunction(onChange) && onChange(e, o, v);
        close();
    }

    function open() {
        return setUnfold(true)
    }

    function close() {
        return setUnfold(false)
    }

    function toggle() {
        if (disabled) return;
        return setUnfold(!unfold)
    }

    function textChange(text) {
        if (search) setOptions(_.filter(props.options, x => _.includes(x.text, text)))
    }
}

Dropdown.defaultProps = {
    options: [],
    value: null,
    defaultValue: null,
    search: false,
    disabled: false,
    placeholder: '请设置任意值...'
};

export default Dropdown;
