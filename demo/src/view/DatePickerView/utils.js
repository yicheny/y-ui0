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
