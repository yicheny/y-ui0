import React, { useState } from 'react';
import cls from 'clsx';

function TextArea(props) {
    const {onChange,disabled,className,style,value,placeholder,defaultValue,readOnly,maxLength,counter} = props;
    const [input, setInput] = useState(null);

    function handleChange(e) {
        const v = e.target.value;
        if (onChange) onChange(v);
    }
    return <div className={cls("y-textarea", { disabled}, className)} style={style}>
        <textarea ref={setInput} placeholder={placeholder} value={value}
                  disabled={disabled} defaultValue={defaultValue} readOnly={readOnly}
                  onChange={handleChange} maxLength={maxLength} />
        {counter && input && <span>{`${input.value.length}/${maxLength}`}</span>}
    </div>
}
TextArea.defaultProps = {
    placeholder: "请输入...",
    disabled: false,
    readOnly: false,
    maxLength: 200,
    counter: true
}
export default TextArea;
