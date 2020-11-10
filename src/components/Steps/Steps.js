import React,{Children,cloneElement} from 'react';
import clsx from "clsx";
import { Icon } from "../../index";

export function Steps({current,children,className,style,direction,onChange}) {
    return <div className={clsx("y-Steps",className,direction,{canClick:_.isFunction(onChange)})} style={style}>
        {Children.map(children,(child,index,list)=>cloneElement(child,{current,index,maxCount:children.length,onChange}))}
    </div>
}
Steps.defaultProps={
    direction:'horizontal',
    current:0,
    onChange:undefined
}

export function Step({current,index,title,description,maxCount,className,style,onChange,status}){
    const finish = getStatus(current > index,'finish');
    const active = getStatus(current === index,'active');
    const wait = getStatus(current < index,'wait');
    const last = index === maxCount-1;
    return <div className={clsx('y-Step',{finish,active,wait,last},className)} style={style}
                onClick={()=>(onChange && onChange(index))}>
        <div className="left">
            <div className="y-Step-mark">{finish ? <Icon name='checkMark' size={16}/> : index+1}</div>
        </div>
        <div className="main">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
        </div>
        <div className="y-Step-tail"/>
    </div>

    function getStatus(defaultRes,value){
        if(!status) return defaultRes;
        return status === value;
    }
}
Step.defaultProps = {
    title:null,
    description:null,
    onChange:undefined
}
