import * as React from 'react';
import * as _ from 'lodash';
import clsx from "clsx";

function List(props) {
    const {data,header,footer,className,style} = props;

    return (<div className={clsx('y-list',className)} style={style}>
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
