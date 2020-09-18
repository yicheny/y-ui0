import React, { useState } from 'react';
import _ from 'lodash';
import cls from 'clsx';

function TextArea(props) {
    const {onChange,disabled,className,style,value,placeholder,defaultValue,readOnly,maxLength,counter} = props;
    const [input, setInput] = useState(defaultValue || value);

    function handleChange(e) {
        const v = e.target.value;
        setInput(v);
        if (onChange) onChange(v);
    }

    return <div className={cls("y-textarea", { disabled}, className)} style={style}>
        <textarea  placeholder={placeholder} value={value}
                  disabled={disabled} defaultValue={defaultValue} readOnly={readOnly}
                  onChange={handleChange} maxLength={maxLength} />
        {counter && <span>{`${_.get(input,'length',0)}/${maxLength}`}</span>}
    </div>
}
TextArea.defaultProps = {
    placeholder: "请输入...",
    disabled: false,
    readOnly: false,
    maxLength: 200,
    counter: true,
    defaultValue:undefined,
    value:undefined
}
export default TextArea;
