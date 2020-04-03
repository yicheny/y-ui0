import React from 'react';
import _ from 'lodash';

function Input(props) {
    const {type,defaultValue,onChange,onBlur,onEnter,...rest} = props;

    return <div className="y-input">
        <input type={type} defaultValue={defaultValue}
               onChange={(e)=>onChange(e.target.value)}
               onBlur={(e)=>onBlur(e.target.value)}
               onKeyDown={handleKeyDown}
               {...rest}/>
    </div>;

    function handleKeyDown(e) {
        if(e.keyCode===13){//回车
            console.log(e.target.value);
            if(_.isFunction(onEnter)) onEnter(e.target.value);
        }
    }
}
Input.defaultProps = {
    type:"text",
    onChange:()=>{},
    onBlur:()=>{},
    onEnter:()=>{}
};

export default Input;