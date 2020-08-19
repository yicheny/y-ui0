import React, {createContext, useContext, useEffect, useState} from 'react';
import _ from 'lodash';
import clsx from "clsx";
import {withNext} from "../../utils/fun";

//数据
const CheckboxContext = createContext({});

//UI组件
export function Checkbox(props) {
    let {value,children,style,className,onChange,defaultChecked,disabled} = props;
    const context = useContext(CheckboxContext);
    const {values,setValues,groupChange} = context;
    const [checked,setChecked] = useState(defaultChecked || props.checked);

    useEffect(()=>{
        if(values) setChecked(_.includes(values,value));
    },[values]);

    useEffect(()=>{
        if(!_.isNil(props.checked)) setChecked(props.checked)
    },[props.checked])

    return <span className={clsx("y-checkbox",{disabled},className)} style={style} onClick={withNext(!disabled,handleClick)}>
        <span className={clsx('y-checkbox-box',{checked})}/>
        <span className="y-checkbox-value">{children}</span>
    </span>

    function handleClick(){
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

export function CheckboxGroup(props) {
    const {children,defaultValues,onChange,style,className} = props;
    const [values,setValues] = useState(defaultValues);

    useEffect(()=>{
        if(Array.isArray(props.values)) setValues(props.values);
    },[props.values])

    return <CheckboxContext.Provider value={{values,setValues,groupChange:onChange}}>
       <div className={clsx("y-checkbox-group",className)} style={style}>
           {children}
       </div>
    </CheckboxContext.Provider>
}
CheckboxGroup.defaultProps={
    defaultValues:[]
}
