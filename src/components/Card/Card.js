import React from 'react';
import clsx from "clsx";

function Card(props) {
    const {children,title,contentStyle,className,style} = props;
    return <div className={clsx("y-card",className)} style={style}>
        {
            title && <div className="y-card-header">
                <div className="title">{title}</div>
            </div>
        }
        <div className="y-card-content" style={contentStyle}>
            {children}
        </div>
    </div>
}

export default Card;
