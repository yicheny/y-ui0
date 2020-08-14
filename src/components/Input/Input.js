import React from 'react';
import _ from 'lodash';
import clsx from "clsx";

const Input = React.forwardRef((props,ref)=>{
    const {defaultValue,className,onChange,onBlur,onPressEnter,onFocus,placeholder} = props;

    return <input type='text'
                  defaultValue={defaultValue}
                  className={clsx('y-input',className)}
                  onChange={eventExecute(onChange)}
                  onBlur={eventExecute(onBlur)}
                  onFocus={eventExecute(onFocus)}
                  onKeyDown={handleKeyDown}
                  placeholder={placeholder}
                  ref={ref}/>;

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
    placeholder:'请输入……'
}

export default Input;
