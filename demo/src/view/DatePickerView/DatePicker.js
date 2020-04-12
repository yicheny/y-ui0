import React,{useState,useEffect,useRef} from 'react';
import _ from 'lodash';
import clsx from "clsx";
import {Calendar} from "./Calendar";
import {maxDaysFor} from "./utils";
import './DatePicker.scss';

//UI组件部分
const DateInput = React.forwardRef((props,ref)=>{
    const {type,defaultValue,className,onChange,onBlur,onEnter,onFocus,...rest} = props;

    return <input type={type} defaultValue={defaultValue}
                  className={clsx('y-date-input',className)}
                  onChange={eventExecute(onChange)}
                  onBlur={eventExecute(onBlur)}
                  onFocus={eventExecute(onFocus)}
                  ref={ref}
                  {...rest}/>;

    function eventExecute(cb) {
        return e => _.isFunction(cb) && cb(e.target.value);
    }
});

function DatePicker(props) {
    const {onChange,value} = props;
    const [id,setId] = useState(0);
    const [selected,setSelected] = useState(value);
    const [focus,setFocus] = useState(false);
    const containerRef = useRef();

    useOnClickOutside(containerRef,()=>setFocus(false));

    return <div className={clsx('y-date-picker',{focus})} ref={containerRef}>
        <DateInput placeholder='请选择日期'
               defaultValue={dateFormat(selected,'-')}
               onBlur={()=>handleChange(selected)}
               onChange={inputChange}
               onFocus={()=>setFocus(true)}
               key={id}
        />
        <div className={"y-date-picker-panel"}>
            <Calendar value={selected} onChange={d=>{setSelected(d);handleChange(d);}}/>
        </div>
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

function useOnClickOutside(ref,handler) {
    useEffect(()=>{
        function listen(e){
            // console.log('useOnClickOutside',e.target,ref.current.contains(e.target));
            if(ref.current && e.target!==ref.current && !ref.current.contains(e.target)) handler();
        }
        document.addEventListener('click',listen);

        return ()=>{
            document.removeEventListener('click',listen);
        }
    },[ref,handler])
}
