import React, {createContext, Fragment, useContext, useEffect, useState} from 'react';
import clsx from "clsx";
import {withNext} from "../../utils/fun";
import _ from "lodash";

//数据
const RadioContext = createContext({});

//UI组件
function Radio(props) {
    let {value,className,style,defaultChecked} = props;
    const context = useContext(RadioContext);
    const {onChange,selectedValue,setSelectedValue} = context;
    const [checked,setChecked] = useState(props.checked === undefined ? defaultChecked : props.checked );

    useEffect(()=>{
        if(!_.isEmpty(context)) setChecked(value===selectedValue);
    },[context])

    useEffect(()=>{
        if(props.checked !== undefined) setChecked(props.checked)
    },[props.checked])

    const disabled = context.disabled || props.disabled;

    return <span className={clsx("y-radio",{disabled},className)} style={style} onClick={withNext(!disabled,handleChange)}>
        <span className={clsx('y-radio-box',{checked})}/>
        <span className="y-radio-value">{props.children}</span>
    </span>;

    function handleChange() {
        if(_.isEmpty(context)){
            return _.isBoolean(checked) ? null : setChecked(true);
        }

        setSelectedValue(value);
        if(onChange) onChange(value);
    }
}
Radio.defaultProps={
    value:null,
    checked:null,
    defaultChecked:null,
};

function RadioGroup(props) {
    const {children,defaultValue,onChange,style,className,options,disabled} = props;
    const [selectedValue,setSelectedValue] = useState(defaultValue);
    return <RadioContext.Provider value={{selectedValue,setSelectedValue,onChange,disabled}}>
        <div className={clsx("y-radioGroup",className)} style={style}>
            {options ? renderOptions(options) : children}
        </div>
    </RadioContext.Provider>;
}

export {Radio,RadioGroup};

function renderOptions(options){
    return <Fragment>
        {
            _.map(options,(x,i)=>{
                const {label,...rest} = x || {};
                return <Radio key={i} {...rest}>{label}</Radio>
            })
        }
    </Fragment>
}
