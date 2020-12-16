import React, {useMemo, useState, useEffect} from 'react';
import _ from 'lodash';
import clsx from "clsx";
import {DateBtn, maxDaysFor} from "../DatePicker/utils";

//UI组件部分
function CalendarCell(props) {
    const {item, selected, setSelected, cardDate,dateCellRender} = props;
    const {y, m, d} = item;
    const now = new Date();
    const currMonth = m === cardDate.getMonth();
    const isSelected = _.isDate(selected) && y===selected.getFullYear() && m===selected.getMonth() && d === selected.getDate();
    const isNow = y === now.getFullYear() && m === now.getMonth() && d === now.getDate();
    return <div className={clsx('cell', {currMonth, isSelected, isNow})}
                onClick={() => setSelected(new Date(y, m, d))}>
        <div className="cell-day">{d}</div>
        {
            dateCellRender && <div className="cell-dateCellRender">{dateCellRender(new Date(y,m,d))}</div>
        }
    </div>;
}

function CalendarCard(props) {
    const {cardDate,selected,setSelected,dateCellRender} = props;

    const data = useMemo(() => {
        const y = cardDate.getFullYear();
        const m = cardDate.getMonth();
        const prevDays = prevDateFor(y, m).map(d => ({y, m: m - 1, d}));
        const currentDays = daysFor(y, m).map(d => ({y, m, d}));
        const nextDays = Array.from(Array(42 - currentDays.length - prevDays.length), (x, i) => i + 1).map(d => ({y, m: m + 1, d}));
        return prevDays.concat(currentDays, nextDays);
    }, [cardDate]);

    return <div className="y-calendar-card">
        <div className="y-calendar-card-header">
            {['一', '二', '三', '四', '五', '六', '日'].map(x => <div key={x}>{x}</div>)}
        </div>
        <div className="y-calendar-card-content">
            {
                _.chunk(data, 7).map((x, i) => {
                    return <div key={i} className="week">
                        {x.map((x2, i2) => <CalendarCell key={i2} cardDate={cardDate} selected={selected} setSelected={setSelected} item={x2} dateCellRender={dateCellRender}/>)}
                    </div>
                })
            }
        </div>
    </div>
}

export default function Calendar(props) {
    const {value, onChange, style, className,fullscreen,dateCellRender} = props;
    const [selected, setSelected] = useState(value);
    const [cardDate,setCardDate] = useState(_.isDate(value) ? value : new Date());

    useEffect(()=>{
        setSelected(value);
        setCardDate(_.isDate(value) ? value : new Date());
    },[value]);

    return <div className={clsx('y-calendar-panel',className,{fullscreen})} style={style}>
        <div className="y-calendar-header">
            <div className="y-calendar-header-prev">
                <DateBtn name='arrowDown2' rotate={90} onClick={() => offsetClick(-12)}/>
                <DateBtn name='arrowDown' rotate={90} onClick={() => offsetClick(-1)}/>
            </div>
            <div className="y-calendar-header-view">
                {''.concat(cardDate.getFullYear(),'年',cardDate.getMonth()+1,'月')}
            </div>
            <div className="y-calendar-header-next">
                <DateBtn name='arrowDown' rotate={-90} onClick={() => offsetClick(1)}/>
                <DateBtn name='arrowDown2' rotate={-90} onClick={() => offsetClick(12)}/>
            </div>
        </div>
        <div className="y-calendar-body">
            <CalendarCard cardDate={cardDate} selected={selected} setSelected={dateClick} dateCellRender={dateCellRender}/>
        </div>
        <div className="y-calendar-footer">
            <a className='y-calendar-today-btn' onClick={() => dateClick(new Date())}>今天</a>
        </div>
    </div>;

    function offsetClick(offset) {
        const [y, m] = setDateByMonth(cardDate.getFullYear(), cardDate.getMonth(), offset);
        setCardDate(new Date(y, m));
    }

    function dateClick(date) {
        setCardDate(date);
        setSelected(date);
        if (_.isFunction(onChange)) onChange(date);
    }
};

//逻辑函数部分
function setDateByMonth(y, m, offset = 0) {
    m += offset;
    if (m <= -1) {
        m += 12;
        y--;
    }
    if (m >= 12) {
        m -= 12;
        y++;
    }
    return [y, m];
}

function daysFor(y, m) {
    return Array.from(Array(maxDaysFor(y, m)), (x, i) => i + 1);
}

function prevDateFor(y, m) {
    let prevStartIndex = (new Date(y, m, 1)).getDay() || 7;
    prevStartIndex = (prevStartIndex - 1) * -1; //减1是需要从周一开始计算，乘-1是为了截取尾数
    return prevStartIndex ? daysFor(...setDateByMonth(y, --m)).slice(prevStartIndex) : [];
}
