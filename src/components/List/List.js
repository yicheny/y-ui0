import React from 'react';
import _ from 'lodash';

function List(props) {
    const {data,header,footer} = props;

    return (<div className='y-list'>
        {
            header && <div className="y-list-header">{header}</div>
        }
        <div className="y-list-content">
            {
                _.map(data,(o,i)=>{
                    return <div className="y-item" key={i}>
                        <span className="y-item-title">{o.title}</span>
                        <span className="y-item-text">{o.text}</span>
                    </div>
                })
            }
        </div>
        {
            footer && <div className="y-list-footer">{footer}</div>
        }
        </div>);
}

export default List;
