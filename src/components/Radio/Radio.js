import React,{createContext,useContext,useState} from 'react';
import clsx from "clsx";

//数据
const RadioContext = createContext({});

//UI组件
function Radio(props) {
    const {value} = props;
    const {onChange,selectedValue,setSelectedValue} = useContext(RadioContext);

    return <span className="y-radio" onClick={handleChange}>
        <span className={clsx('y-radio-box',{checked:value===selectedValue})}/>
        <span className="y-radio-value">{props.children}</span>
    </span>;

    function handleChange() {
        setSelectedValue(value);
        if(onChange) onChange(value);
    }
}
Radio.defaultProps={
    value:''
};

function RadioGroup(props) {
    const {children,defaultValue,onChange} = props;
    const [selectedValue,setSelectedValue] = useState(defaultValue);
    return <RadioContext.Provider value={{selectedValue,setSelectedValue,onChange}}>
        <div className="y-radioGroup">
            {children}
        </div>
    </RadioContext.Provider>;
}

export {Radio,RadioGroup};
