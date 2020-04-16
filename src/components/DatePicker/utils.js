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
}

function isLeap(y) {
    if(_.isNumber(y)) return console.error('isLeap函数参数必须为Number');
    if ((y % 100)===0) return (y % 400)===0;
    return (y % 4)===0;
}

export function eventExecute(cb,node) {
    return _.isFunction(cb) && cb(_.get(node,'value'));
}

//搁置
/*const root = document.querySelector("body");
export function CalendarBox(props) {
    const {pRef,children} = props;
    const [,forceUpdate] = useReducer(x=>x+1,0);
    const node = useRef(document.createElement('div'));

    useEffect(()=>{
        const {left,top} = pRef.current.getBoundingClientRect();
        node.current.style=`position:absolute;top:${top+40}px;left:${left}px`;
        forceUpdate();

        // const event = ()=>{
        //     const {left,top} = pRef.current.getBoundingClientRect();
        //     node.current.style=`position:absolute;top:${top+40}px;left:${left}px`;
        //     forceUpdate();
        // };
    },[pRef]);

    useEffect(()=>{
        root.appendChild(node.current);
        return ()=>root.removeChild(node.current);
    },[]);

    return createPortal(children,node.current)
}*/
