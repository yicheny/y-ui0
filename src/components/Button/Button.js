import React from 'react';
import cls from 'clsx';

function Button(props) {
    const {className,children,primary,text,disabled,cancel,...rest} = props;

    const cn = cls('y-button',className,{text,primary,cancel,disabled});
    return <span className={cn} {...rest}>
            {children}
        </span>;
}
Button.defaultProps={
    className:'',
};

export default Button;