import React, {useRef, useState, useEffect, useLayoutEffect, Fragment} from 'react';
import clsx from "clsx";
import Icon from "../Icon";
import {useExactHeight, useOnClickOutside} from "../../utils/hook";
import Popup from "../../utils/Popup";

function Dropdown(props) {
    const {onChange, defaultValue, search, disabled, placeholder,className,style,clear} = props;
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
        if(!unfold) setOptions(props.options);
        return updateHeight(unfold)
    }, [unfold, updateHeight,props.options])

    useEffect(() => {
        updateInput(x => x + 1);
    }, [currentItem])

    return <div className={clsx('y-dropdown', {unfold, disabled},className)} style={style} onFocus={open} ref={ref}>
        <div className="input-box">
            <div className="search-input">
                <input type="text" key={inputKey}
                       readOnly={!search}
                       disabled={disabled}
                       placeholder={placeholder}
                       defaultValue={_.get(currentItem, 'text')}
                       onChange={e => textChange(e.target.value)}/>
            </div>
            <div className={clsx('status',{clear: clear && currentItem})}
                 onClick={toggle}>
                <Icon name='arrowDown' size={20}/>
                {clear && <Icon name='cancel' size={10} onClick={handleClear}/>}
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
    </div>;

    function handleClick(e, o, v) {
        setCurrentItem(o);
        _.isFunction(onChange) && onChange(v,o);
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

    function handleClear(e){
        if(_.isNil(currentItem)) return ;
        e.stopPropagation();
        e.preventDefault();
        handleClick(e,null,null);
    }
}

Dropdown.defaultProps = {
    options: [],
    defaultValue: null,
    search: false,
    disabled: false,
    clear:false,
    placeholder: '请设置任意值...'
};

export default Dropdown;
