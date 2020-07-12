import React from 'react';
import _ from 'lodash';

function Table(props) {
    const {columns,data} = props;

    return (<div className={'y-table'}>
        <div className="y-table-header y-table-row">
            {
                _.map(columns,(col,i)=><Cell key={i} text={col.header} width={col.width} align={col.align}/>)
            }
        </div>

        <div className="y-table-content">
            {_.map(data,(o,i)=>{
                return <Row key={i} data={o} columns={columns}/>
            })}
        </div>
    </div>);
}

export default Table;

function Row(props) {
    const {data,columns} = props;

    return <div className="y-table-row">
        {
            _.map(columns,(col,i)=>{
                return <Cell key={i} text={data[col.bind]} width={col.width} align={col.align}/>
            })
        }
    </div>
}

function Cell(props) {
    const {text,width=100,align='left'} = props;

    return <div className="y-table-cell" style={{width,textAlign:align}}>
        {text}
    </div>
}
