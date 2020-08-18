import React, {createContext, useContext, useEffect, useState} from 'react';
import clsx from "clsx";

//数据
const RadioContext = createContext({});

//UI组件
function Radio(props) {
    let {value,className,style,defaultChecked} = props;
    const context = useContext(RadioContext);
    const {onChange,selectedValue,setSelectedValue} = context;
    const [checked,setChecked] = useState(defaultChecked || props.checked);

    useEffect(()=>{
        if(!_.isEmpty(context)) setChecked(value===selectedValue);
    },[context])

    useEffect(()=>{
        if(!_.isNil(props.checked)) setChecked(props.checked)
    },[props.checked])

    return <span className={clsx("y-radio",className)} style={style} onClick={handleChange}>
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
    const {children,defaultValue,onChange,style,className} = props;
    const [selectedValue,setSelectedValue] = useState(defaultValue);
    return <RadioContext.Provider value={{selectedValue,setSelectedValue,onChange}}>
        <div className={clsx("y-radioGroup",className)} style={style}>
            {children}
        </div>
    </RadioContext.Provider>;
}

export {Radio,RadioGroup};
