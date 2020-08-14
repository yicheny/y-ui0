import React,{useState,useRef} from 'react';
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
               onChange={inputEventExecute(onChange)}
               {...rest}/>
        {suffix && <div className='suffix'>{suffix}</div>}
    </div>;

    function handleClick() {
        if(!focused) {
            setFocused(true);
            return eventExecute(onFocus,inputRef.current);
        }
    }

    function inputEventExecute(cb) {
        return e => eventExecute(cb,e.target);
    }
}

function DatePicker(props) {
    const {onChange,value} = props;
    const [id,setId] = useState(0);
    const [selected,setSelected] = useState(value);
    const [focus,setFocus] = useState(false);
    const containerRef = useRef();

    useOnClickOutside(containerRef,()=>setFocus(false));

    return <div className={clsx('y-date-picker',{focus})} ref={containerRef}>
        <DateInput placeholder='请选择日期'
               className={clsx({isClear:!_.isNil(selected)})}
               defaultValue={dateFormat(selected,'-')}
               onBlur={()=>handleChange(selected)}
               onChange={inputChange}
               onFocus={()=>setFocus(true)}
               suffix={[<Icon name='calendar' key={0}/>,<Icon key={1} name='cancel' size={10} onClick={()=>{setSelected(null);handleChange(null);setFocus(false);}}/>]}
               key={id}
        />
        <Popup owner={containerRef.current}>
            <div className={"y-date-picker-panel"}>
                <Calendar value={selected} onChange={(d)=>{setSelected(d);handleChange(d);setFocus(false);}}/>
            </div>
        </Popup>
    </div>;

    function inputChange(v) {
        const d = date_validate(v);
        if(d) setSelected(d);
    }

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

    function handleChange(d) {
        if(_.isFunction(onChange)) onChange(d);
        setId(x=>++x);
    }
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
