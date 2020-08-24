import React,{useState,useEffect,useRef} from 'react';
import clsx from "clsx";
import {Tooltip} from "../../index";

export default function TextTooltip(props) {
    const { children, className, onClick, ...rest } = props;
    const [ active, setActive ] = useState(false);
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current.offsetWidth >= containerRef.current.offsetWidth) {
            setActive(true)
        }
    }, []);

    const content = <span className='y-text-tooltip-inner' onClick={onClick} ref={contentRef}>{children}</span>;

    return <div className={ clsx(className, 'y-text-tooltip') } ref={ containerRef } { ...rest }>
        { active ? <Tooltip title={ children }>{ content }</Tooltip> : content }
        <style jsx>{`
        .y-text-tooltip{
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
        }
        `}</style>
    </div>
}
