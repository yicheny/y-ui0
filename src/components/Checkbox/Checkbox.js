import React,{createContext,useContext,useState} from 'react';
import _ from 'lodash';
import clsx from "clsx";

//数据
const CheckboxContext = createContext({});

//UI组件
export function Checkbox(props) {
    const {value,children} = props;
    const {values,setValues,onChange} = useContext(CheckboxContext);

    const checked = _.includes(values,value);
    return <span className="y-checkbox" onClick={handleClick}>
        <span className={clsx('y-checkbox-box',{checked})}/>
        <span className="y-checkbox-value">{children}</span>
    </span>

    function handleClick(){
        checked ? _.pull(values, value) : values.push(value);
        const nextValues = _.clone(values);
        setValues(nextValues);
        if(onChange) onChange(nextValues);
    }
}

export function CheckboxGroup(props) {
    const {children,defaultValues,onChange} = props;
    const [values,setValues] = useState(defaultValues);

    return <CheckboxContext.Provider value={{values,setValues,onChange}}>
       <div className="y-checkbox-group">
           {children}
       </div>
    </CheckboxContext.Provider>
}
CheckboxGroup.defaultProps={
    defaultProps:[]
}
