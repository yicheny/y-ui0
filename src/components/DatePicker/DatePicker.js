import React, {useState, useRef, Fragment, useEffect} from 'react';
import _ from 'lodash';
import clsx from "clsx";
import Calendar from "../Calendar/Calendar";
import {maxDaysFor,eventExecute} from "./utils";
import {Icon} from "../../index";
import {useOnClickOutside} from "../../utils/hook";
import Popup from "../../utils/Popup";

//UI组件部分
function DateInput(props) {
    const {type,defaultValue,className,suffix,onChange,onBlur,onEnter,onFocus,...rest} = props;
    const [focused,setFocused] = useState(false);
    const containerRef = useRef();
    const inputRef = useRef();

    useOnClickOutside(containerRef,()=>{
        if(focused){
            setFocused(false);
            return eventExecute(onBlur,inputRef.current)
        }
    });

    return <div className={clsx('y-date-input',className)} ref={containerRef} onClick={handleClick}>
        <input type={type} defaultValue={defaultValue}
               ref={inputRef}
               onChange={handleChange}
               {...rest}/>
        {suffix && <div className='suffix'>{suffix}</div>}
    </div>;

    function handleClick() {
        if(!focused) {
            setFocused(true);
            return eventExecute(onFocus,inputRef.current);
        }
    }

    function handleChange(e) {
        if(!_.isFunction(onChange)) return null;
        const value = e.target.value;
        const d = date_validate(value);
        if(d) onChange(d);

        function date_validate(v) {
            const reg = new RegExp(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);
            if(reg.test(v)){
                let [,y,m,d] = reg.exec(v);
                m--;
                if(m<=11 && d<=maxDaysFor(y,m)) return new Date(v)
            }
            if(!_.isNil(selected)) return selected;
            return false;
        }
    }
}

function DatePicker(props) {
    const {onChange,value,clear} = props;
    const [id,setId] = useState(0);
    const [selected,setSelected] = useState(value);
    const [focus,setFocus] = useState(false);
    const containerRef = useRef();
    const initSelectedRef = useRef(value);

    useOnClickOutside(containerRef,()=>setFocus(false));

    useEffect(()=>{
        if(focus) return ()=>{};
        if(_.isUndefined(selected)) return ()=>{};
        if(!_.isFunction(onChange)) return ()=>{};
        if(isEqual()) return ()=>{};
        onChange(selected);
        initSelectedRef.current = selected;

        function isEqual(){
            const initSelect = initSelectedRef.current;
            if(_.isEqual(initSelect,selected)) return true;
            if([initSelect,selected].some(x=>!_.isDate(x))) return false;
            return initSelect.getTime() === selected.getTime();
        }
    },[focus])

    const suffix = <Fragment>
        <Icon name='calendar'/>
        <Icon name='cancel' size={10} onClick={()=>handleChange(null)}/>
    </Fragment>

    return <div className={clsx('y-date-picker',{focus})} ref={containerRef}>
        <DateInput placeholder='请选择日期'
               className={clsx({isClear:clear && !_.isNil(selected)})}
               defaultValue={dateFormat(selected,'-')}
               onChange={setSelected}
               onFocus={()=>setFocus(true)}
               suffix={suffix}
               key={id}
        />
        <Popup owner={containerRef.current}>
            <div className={"y-date-picker-panel"}>
                <Calendar value={selected} onChange={handleChange}/>
            </div>
        </Popup>
    </div>;

    function handleChange(d){
        setSelected(d);
        setId(x=>++x);
        setFocus(false);
    }
}
DatePicker.defaultProps = {
    clear:false
}
export default DatePicker;

///逻辑函数部分
function dateFormat(date,symbol) {
    if(!_.isDate(date)) return '';
    const y = date.getFullYear();
    const m = date.getMonth()+1;
    const d = date.getDate();
    return [y,m,d].join(symbol);
}
