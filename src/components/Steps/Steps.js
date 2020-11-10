import React,{Children,cloneElement} from 'react';
import clsx from "clsx";
import { Icon } from "../../index";

export function Steps({current,children,className,style,direction}) {
    return <div className={clsx("y-Steps",className,direction)} style={style}>
        {Children.map(children,(child,index,list)=>cloneElement(child,{current,index,maxCount:children.length}))}
    </div>
}
Steps.defaultProps={
    direction:'horizontal',
    current:0
}

export function Step(props){
    const {current,index,title,description,maxCount,className,style} = props;

    const finish = current > index;
    const active = current === index;
    const wait = current < index;
    const last = index === maxCount-1;
    return <div className={clsx('y-Step',{finish,active,wait,last},className)} style={style}>
        <div className="left">
            <div className="y-Step-mark">{finish ? <Icon name='checkMark' size={16}/> : index+1}</div>
        </div>
        <div className="main">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
        </div>
        <div className="y-Step-tail"/>
    </div>
}
