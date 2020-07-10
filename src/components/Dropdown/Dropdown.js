import React, {createRef, useState} from 'react';
import clsx from "clsx";
import Icon from "../Icon";
import {useOnClickOutside} from "../../utils/hook";

function Dropdown(props) {
    const {options,onChange,defaultValue} = props;
    const [currentItem,setCurrentItem] = useState(_.find(options,o=>o.value===defaultValue))
    const [unfold,setUnfold] = useState(false);//是否展开
    const ref = createRef();

    useOnClickOutside(ref,close)

    return <div className={clsx('y-dropdown',{unfold})} onFocus={open} ref={ref}>
        <div className="input-box">
            <div className="search">
                <input type="text"
                       placeholder='请设置任意值...'
                       value={_.get(currentItem,'text')}
                       onChange={()=>{}}/>
            </div>
            <div className="status" onClick={toggle}>
                <Icon name='arrowDown' size={20}/>
            </div>
        </div>
        <div className="popup">
            <div className="list">
                {
                    _.isEmpty(options)
                        ? <div className="noList">没有可选内容</div>
                        : _.map(options,(o,i)=>{
                            return <div key={i} className={clsx({selected:o.text===_.get(currentItem,'text')},"item")}
                                        onClick={(e)=>handleClick(e,o,o.value)}>
                                {o.text}
                            </div>
                        })
                }
            </div>
        </div>
    </div>;

    function handleClick(e,o,v) {
        setCurrentItem(o);
        _.isFunction(onChange) && onChange(e,o,v);
        close();
    }

    function open() {
        return setUnfold(true)
    }

    function close() {
        return setUnfold(false)
    }

    function toggle() {
        return setUnfold(!unfold)
    }
}
Dropdown.defaultProps={
    options:[],
    value:null,
    defaultValue:null,
};

export default Dropdown;
