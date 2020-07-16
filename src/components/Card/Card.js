import React from 'react';

function Card(props) {
    const {children,title,contentStyle} = props;
    return <div className="y-card">
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
