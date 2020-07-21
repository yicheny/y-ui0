import React,{useState,useEffect} from 'react';
import _ from 'lodash';
import clsx from "clsx";
import {TextTooltip} from "../../index";

export default function Anchor(props) {
    const {option} = props;
    const [currentId,setCurrentId] = useState({});
    const [viewportEleIds,setViewportEleIds] = useState([]);

    useEffect(()=>{
        setCurrentId({id:_.head(option.filter(o=>viewportEleIds.includes(o.id)).map(o=>o.id))});
    },[option,viewportEleIds]);

    useEffect(()=>{
        const io = new IntersectionObserver(ioes => {
            const currentIds = {};

            ioes.forEach(ioe => {
                const intersectionRatio = ioe.intersectionRatio;
                if (intersectionRatio > 0 && intersectionRatio <= 1) {
                    currentIds[ioe.target.id] = 'visible';
                }else{
                    currentIds[ioe.target.id] = 'hidden';
                }
            });

            const ids =  _.reduce(_.entries(currentIds),(acc,x)=>{
                const [id,type] = x;
                type==='visible' && acc.push(id);
                return acc;
            },[]);

            if(_.isEmpty(ids)) return ()=>{};
            if(ids.includes(currentId.id) && currentId.isClickSet) return ()=>{};
            setViewportEleIds(ids);
        });

        const eleList = _.reduce(option,(acc,o)=>{
            const ele = document.getElementById(o.id);
            ele && acc.push(ele);
            return acc;
        },[]);

        eleList.forEach(x=>io.observe(x));

        return ()=>eleList.forEach(x=>io.unobserve(x));
    },[option,currentId]);

    return <div className="y-anchor">
        {
            _.map(option,(o,i)=>{
                return <div key={i} className={clsx("y-anchor-item",{selected:o.id===currentId.id})}>
                    <TextTooltip onClick={()=>handleClick(o)}>
                        {o.title}
                    </TextTooltip>
                </div>
            })
        }
    </div>;

    function handleClick(o) {
        const ele = document.getElementById(o.id);
        if(ele){
            ele.scrollIntoView();
            setCurrentId({isClickSet:true,id:o.id});
        }
    }
}
