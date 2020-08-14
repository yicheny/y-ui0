import React from 'react';
import cls from 'clsx';

function Button(props) {
    const {className,children,primary,text,disabled,cancel,danger,style,onClick} = props;

    return <span className={cls('y-button',className,{text,primary,cancel,disabled,danger})}
                 style={style} onClick={onClick}>
            {children}
        </span>;
}

export default Button;
