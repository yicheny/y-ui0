import React from 'react';
import clsx from "clsx";
import './Radio.scss';

function Radio(props) {
    const {onChange,value} = props;

    return <span className="y-radio" onClick={handleChange}>
        <span className={clsx('y-radio-box',{checked:value===props.active})}/>
        <span className="y-radio-value">{props.children}</span>
    </span>;

    function handleChange() {
        if(onChange) onChange(value);
    }
}
Radio.defaultProps={
    value:''
};

function RadioGroup(props) {
    return <div className="y-radioGroup">
        {
            React.Children.map(props.children,child=>{
                return React.cloneElement(child,{
                    active:props.active,
                    onChange:props.onChange,
                })
            })
        }
    </div>;
}

export {Radio,RadioGroup};
