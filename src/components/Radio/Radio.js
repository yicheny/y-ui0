import React,{createContext,useContext} from 'react';
import clsx from "clsx";

//数据
const RadioContext = createContext({});

//UI组件
function Radio(props) {
    const {value} = props;
    const {onChange,active} = useContext(RadioContext);

    return <span className="y-radio" onClick={handleChange}>
        <span className={clsx('y-radio-box',{checked:value===active})}/>
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
    const {children,...rest} = props;
    return <RadioContext.Provider value={rest}>
        <div className="y-radioGroup">
            {children}
        </div>
    </RadioContext.Provider>;
}

export {Radio,RadioGroup};
