import React,{useMemo,useState} from 'react';
import clsx from "clsx";
import './Calendar.scss';
import {DateBtn} from "./utils";

//UI组件部分
function CalendarCell(props) {
    const {item,current,setDate} = props;
    const {y,m,d} = item;
    const currMonth = m === current.getMonth();
    const selected  = currMonth && d === current.getDate();
    return <div className={clsx('cell',{currMonth, selected})} onClick={()=>setDate(new Date(y,m,d))}>{d}</div>;
}

function CalendarCard(props) {
    const {current,setDate} = props;

    const data = useMemo(()=>{
        const y = current.getFullYear();
        const m = current.getMonth();
        const prevDays = prevDateFor(y,m).map(d=>({y,m:m-1,d}));
        const currentDays = daysFor(y,m).map(d=>({y,m,d}));
        const nextDays = Array.from(Array(42-currentDays.length-prevDays.length),(x,i)=>i+1).map(d=>({y,m:m+1,d}));
        return prevDays.concat(currentDays,nextDays);
    },[current]);

    return <div className="y-calendar-card">
        <div className="y-calendar-card-header">
            {['一','二','三','四','五','六','日'].map(x=><div key={x}>{x}</div>)}
        </div>
        <div className="y-calendar-card-content">
            {
                _.chunk(data,7).map((x,i)=>{
                    return <div key={i} className="week">
                        {x.map((x2,i2)=><CalendarCell key={i2} current={current} setDate={setDate} item={x2}/>)}
                    </div>
                })
            }
        </div>
    </div>
}

export function Calendar(props) {
    const [current,setCurrent] = useState(props.initValue);
    return <div className='y-calendar-panel'>
        <div className="y-calendar-header">
            <div className="y-calendar-header-prev">
                <DateBtn name='arrowDown2' rotate={90} onClick={()=>offsetClick(-12)}/>
                <DateBtn name='arrowDown' rotate={90} onClick={()=>offsetClick(-1)}/>
            </div>
            <div className="y-calendar-header-view">
                {[current.getFullYear(),current.getMonth()+1,current.getDate()].join('-')}
            </div>
            <div className="y-calendar-header-next">
                <DateBtn name='arrowDown' rotate={-90} onClick={()=>offsetClick(1)}/>
                <DateBtn name='arrowDown2' rotate={-90} onClick={()=>offsetClick(12)}/>
            </div>
        </div>
        <div className="y-calendar-body">
            <CalendarCard current={current} setDate={setCurrent}/>
        </div>
        <div className="y-calendar-footer">
            <a className='y-calendar-today-btn' onClick={()=>setCurrent(new Date())}>今天</a>
        </div>
    </div>;

    function offsetClick(offset) {
        const [y,m] = setDateByMonth(current.getFullYear(),current.getMonth(),offset);
        const d = lastDayFor(y,m,current.getDate());
        setCurrent(new Date(y,m,d))
    }
}

//逻辑函数部分
function setDateByMonth(y,m,offset=0) {
    m += offset;
    if(m<=-1){
        m+=12;
        y--;
    }
    if(m>=12){
        m-=12;
        y++;
    }
    return [y,m];
}

function daysFor(y,m) {
    return Array.from(Array(maxDaysFor(y,m)),(x,i)=>i+1);
}

function maxDaysFor(y,m) {
    const normal_days = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(isLeap(y)) normal_days[1] = 29;
    return normal_days[m];
}

function lastDayFor(y,m,d) {
    return d>maxDaysFor(y,m) ? maxDaysFor(y,m) : d;
}

function isLeap(y) {
    if (!(y % 100)) return !(y % 400);
    return !(y % 4);
}

function prevDateFor(y,m) {
    let prevStartIndex = (new Date(y,m,1)).getDay() || 7;
    prevStartIndex = (prevStartIndex-1)*-1; //减1是需要从周一开始计算，乘-1是为了截取尾数
    return prevStartIndex ? daysFor(...setDateByMonth(y,m)).slice(prevStartIndex) : [];
}