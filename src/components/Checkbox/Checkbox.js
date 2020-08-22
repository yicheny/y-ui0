import React, { createContext, Fragment, useContext, useEffect, useState } from 'react';
import _ from 'lodash';
import clsx from "clsx";
import {withNext} from "../../utils/fun";

//数据
const CheckboxContext = createContext({});

//UI组件
export function Checkbox(props) {
    let {value,children,style,className,onChange,defaultChecked} = props;
    const context = useContext(CheckboxContext);
    const {values,setValues,groupChange} = context;
    const [indeterminate,setIndeterminate] = useState(props.indeterminate);
    const [checked,setChecked] = useState(defaultChecked || props.checked);

    useEffect(()=>{
        if(values) setChecked(_.includes(values,value));
    },[values]);

    useEffect(()=>{
        if(!_.isNil(props.checked)) setChecked(props.checked)
    },[props.checked]);

    useEffect(()=>{
        setIndeterminate(props.indeterminate);
    },[props.indeterminate])

    const disabled = context.disabled || props.disabled;

    return <span className={clsx("y-checkbox",{indeterminate,disabled},className)} style={style} onClick={withNext(!disabled,handleClick)}>
        <span className={clsx('y-checkbox-box',{checked})}/>
        <span className="y-checkbox-value">{children}</span>
    </span>

    function handleClick(){
        indeterminate && setIndeterminate(false);
        if(_.isEmpty(context)) {
            if(_.isBoolean(props.checked)) return null;

            const nextChecked = !checked;
            setChecked(nextChecked);
            if(onChange) onChange(nextChecked);
            return null;
        }

        checked ? _.pull(values, value) : values.push(value);
        const nextValues = _.clone(values);
        setValues(nextValues);
        if(groupChange) groupChange(nextValues);
    }
}
Checkbox.defaultProps={
    indeterminate:false
}

export function CheckboxGroup(props) {
    const {children,defaultValues,onChange,style,className,disabled,options} = props;
    const [values,setValues] = useState(defaultValues);

    useEffect(()=>{
        if(Array.isArray(props.values)) setValues(props.values);
    },[props.values])

    return <CheckboxContext.Provider value={{values,setValues,groupChange:onChange,disabled}}>
       <div className={clsx("y-checkbox-group",className)} style={style}>
           {options ? renderOptions(options) : children}
       </div>
    </CheckboxContext.Provider>
}
CheckboxGroup.defaultProps={
    defaultValues:[],
    disabled:false
}

function renderOptions(options){
    return <Fragment>
        {
            _.map(options,(x,i)=>{
                const {label,...rest} = x || {};
                return <Checkbox key={i} {...rest}>{label}</Checkbox>
            })
        }
    </Fragment>
}
