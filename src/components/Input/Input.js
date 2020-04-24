import React from 'react';
import _ from 'lodash';
import clsx from "clsx";

const Input = React.forwardRef((props,ref)=>{
    const {type,defaultValue,className,onChange,onBlur,onPressEnter,onFocus,...rest} = props;

    return <input type={type} defaultValue={defaultValue}
                  className={clsx('y-input',className)}
                  onChange={eventExecute(onChange)}
                  onBlur={eventExecute(onBlur)}
                  onFocus={eventExecute(onFocus)}
                  onKeyDown={handleKeyDown}
                  ref={ref}
                  {...rest}/>;

    function handleKeyDown(e) {
        if(e.keyCode===13){//回车
            eventExecute(onPressEnter)(e);
        }
    }

    function eventExecute(cb) {
        return e => _.isFunction(cb) && cb(e.target.value);
    }
});
Input.defaultProps = {
    type:"text",
    onChange:()=>{},
    onBlur:()=>{},
    onPressEnter:()=>{},
    onFocus:()=>{}
};

export default Input;
