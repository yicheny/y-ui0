import React,{Children,cloneElement} from 'react';
import clsx from "clsx";
import { Icon } from "../../index";

export function Steps(props) {
    const {current,children,className,style} = props;
    return <div className={clsx("y-Steps",className)} style={style}>
        {Children.map(children,(child,index,list)=>cloneElement(child,{current,index,maxCount:children.length}))}
    </div>
}
Steps.defaultProps={
    direction:'vertical',
    current:0
}

export function Step(props){
    const {current,index,title,description,maxCount,className,style} = props;

    const finish = current > index;
    const active = current === index;
    const wait = current < index;
    const last = index === maxCount-1;
    return <div className={clsx('y-Step',{finish,active,wait,last},className)} style={style}>
        <div className="mark">{finish ? <Icon name='checkMark' size={16}/> : index+1}</div>
        <div className="tail"/>
        <div className="main">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
        </div>
    </div>
}
