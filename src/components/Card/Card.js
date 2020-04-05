import React from 'react';

function Card(props) {
    const {children,title,contentStyle} = props;
    return <div className="y-card">
        <div className="y-card-header">
            {title && <div className="title">{title}</div>}
        </div>
        <div className="y-card-content" style={contentStyle}>
            {children}
        </div>
    </div>
}

export default Card;