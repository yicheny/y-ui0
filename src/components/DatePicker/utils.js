import React from 'react';
import _ from "lodash";
import {SvgIcon} from "../../index";

//UI组件部分
export function DateBtn(props) {
    return <SvgIcon className="y-date-btn" size={14} {...props}/>
}

///逻辑函数部分
export function maxDaysFor(y, m) {
    const normal_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeap(y)) normal_days[1] = 29;
    return normal_days[m];

    function isLeap(y) {
        y = Number(y);
        if(isNaN(y)) return console.error('isLeap函数参数必须为Number');
        if ((y % 100)===0) return (y % 400)===0;
        return (y % 4)===0;
    }
}

export function eventExecute(cb,node) {
    return _.isFunction(cb) && cb(_.get(node,'value'));
}
