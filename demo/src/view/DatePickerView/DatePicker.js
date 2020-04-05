import React,{useState} from 'react';
import _ from 'lodash';
import {Calendar} from "./Calendar";
import {Input} from "../../../../src";
import {maxDaysFor} from "./utils";
import './DatePicker.scss';

//UI组件部分
function DatePicker(props) {
    const {onChange,initValue} = props;
    const [id,setId] = useState(0);
    const [current,setCurrent] = useState(initValue);

    return <div className='y-date-picker'>
        <Input placeholder='请选择日期' defaultValue={dateFormat(current,'-')} onBlur={inputChange} key={id}/>
        <div className="y-date-picker-panel">
            <Calendar initValue={current} onChange={handleChange} key={id}/>
        </div>
    </div>;

    function inputChange(v) {
        const reg = new RegExp(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);
        if(reg.test(v)){
            let [,y,m,d] = reg.exec(v);
            m--;
            if(m<=11 && d<=maxDaysFor(y,m)) return handleChange(new Date(v))
        }
        if(!_.isNil(current)) handleChange(current);
    }

    function handleChange(c) {
        setCurrent(c);
        if(_.isFunction(onChange)) onChange(c);
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