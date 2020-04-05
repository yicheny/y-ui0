import React from 'react';
import _ from 'lodash';
import clsx from "clsx";

function Input(props) {
    const {type,defaultValue,className,onChange,onBlur,onEnter,onFocus,...rest} = props;

    return <input type={type} defaultValue={defaultValue}
                  className={clsx('y-input',className)}
                  onChange={eventExecute(onChange)}
                  onBlur={eventExecute(onBlur)}
                  onFocus={eventExecute(onFocus)}
                  onKeyDown={handleKeyDown}
                  {...rest}/>;

    function handleKeyDown(e) {
        if(e.keyCode===13){//回车
            eventExecute(onEnter)(e);
        }
    }
    
    function eventExecute(cb) {
        return e => _.isFunction(cb) && cb(e.target.value);
    }
}
Input.defaultProps = {
    type:"text",
    onChange:()=>{},
    onBlur:()=>{},
    onEnter:()=>{},
    onFocus:()=>{}
};

export default Input;