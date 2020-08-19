import React, {createContext, useContext, useEffect, useState} from 'react';
import _ from 'lodash';
import clsx from "clsx";

//数据
const CheckboxContext = createContext({});

//UI组件
export function Checkbox(props) {
    let {value,children,style,className,onChange} = props;
    const context = useContext(CheckboxContext);
    const {values,setValues,groupChange} = context;
    const [checked,setChecked] = useState(null);

    useEffect(()=>{
        if(values) setChecked(_.includes(values,value));
    },[values]);

    return <span className={clsx("y-checkbox",className)} style={style} onClick={handleClick}>
        <span className={clsx('y-checkbox-box',{checked})}/>
        <span className="y-checkbox-value">{children}</span>
    </span>

    function handleClick(){
        if(_.isEmpty(context)) {
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

    return <CheckboxContext.Provider value={{values,setValues,groupChange:onChange}}>
       <div className={clsx("y-checkbox-group",className)} style={style}>
           {children}
       </div>
    </CheckboxContext.Provider>
}
CheckboxGroup.defaultProps={
    defaultProps:[]
}
