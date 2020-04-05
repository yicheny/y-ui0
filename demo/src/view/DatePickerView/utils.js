import React from 'react';
import {SvgIcon} from "../../lib";
import './utils.scss';

//UI组件部分
export function DateBtn(props) {
    return <SvgIcon className="y-date-btn" size={14} {...props}/>
}

///逻辑函数部分
export function maxDaysFor(y, m) {
    const normal_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeap(y)) normal_days[1] = 29;
    return normal_days[m];
}

function isLeap(y) {
    if (!(y % 100)) return !(y % 400);
    return !(y % 4);
}
