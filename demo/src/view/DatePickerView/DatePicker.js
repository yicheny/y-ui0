import React,{useMemo,useState} from 'react';
import './DatePicker.scss';
import clsx from "clsx";

function daysFor(y,m) {
    const normal_days = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(isLeap(y)) normal_days[1] = 29;
    return Array.from(Array(normal_days[m]),(x,i)=>i+1);
}

function isLeap(y) {
    if (!(y % 100)) return !(y % 400);
    return !(y % 4);
}

function prevDateFor(y,m) {
    let prevStartIndex = (new Date(y,m,1)).getDay() || 7;
    prevStartIndex = (prevStartIndex-1)*-1; //减1是需要从周一开始计算，乘-1是为了截取尾数
    return prevStartIndex ? daysFor(y,m-1).slice(prevStartIndex) : [];
}

function DatePickerCell(props) {
    const {item,current,setDate} = props;
    const {y,m,d} = item;
    const currMonth = m === current.getMonth();
    const selected  = currMonth && d === current.getDate();
    return <div className={clsx('cell',{currMonth, selected})} onClick={()=>setDate(new Date(y,m,d))}>{d}</div>;
}

function DatePickerCard(props) {
    const {current,setDate} = props;

    const data = useMemo(()=>{
        const y = current.getFullYear();
        const m = current.getMonth();
        const prevDays = prevDateFor(y,m).map(d=>({y,m:m-1,d}));
        const currentDays = daysFor(y,m).map(d=>({y,m,d}));
        const nextDays = Array.from(Array(42-currentDays.length-prevDays.length),(x,i)=>i+1).map(d=>({y,m:m+1,d}));
        return prevDays.concat(currentDays,nextDays);
    },[current]);

    return <div className="y-date-picker-card">
        <div className="y-date-picker-card-header">
            {['一','二','三','四','五','六','日'].map(x=><div key={x}>{x}</div>)}
        </div>
        <div className="y-date-picker-card-content">
            {
                _.chunk(data,7).map((x,i)=>{
                    return <div key={i} className="week">
                        {x.map((x2,i2)=><DatePickerCell key={i2} current={current} setDate={setDate} item={x2}/>)}
                    </div>
                })
            }
        </div>
    </div>
}

export function DatePickerMainPanel(props) {
    const [current,setCurrent] = useState(props.initValue);
    return <div className='y-date-picker-panel'>
        <div className="y-picker-header">
            <div className="y-picker-header-view">
                {[current.getFullYear(),current.getMonth()+1,current.getDate()].join('-')}
            </div>
        </div>
        <div className="y-picker-body">
            <DatePickerCard current={current} setDate={setCurrent}/>
        </div>
        <div className="y-picker-footer">
            <a className='y-picker-today-btn' onClick={()=>setCurrent(new Date())}>今天</a>
        </div>
    </div>;
}

//new Date参数设置
//2020-12-31
//2020,11,31
