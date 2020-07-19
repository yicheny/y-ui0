import React,{useState,useEffect,useRef} from 'react';
import {Tooltip} from "../../index";

export default function TextTooltip(props) {
    const { children, className, onClick, ...rest } = props;
    const [ active, setActive ] = useState(false);
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current.offsetWidth > containerRef.current.offsetWidth) {
            setActive(true)
        }
    }, []);

    const content = <div className='all-tooltip-inner' onClick={onClick} ref={contentRef}>{children}</div>;

    return <div className={ clsx(className, 'all-tooltip c-ellipsis') } ref={ containerRef } { ...rest }>
        { active ? <Tooltip title={ children }>{ content }</Tooltip> : content }
    </div>
}
