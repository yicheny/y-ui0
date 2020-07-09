import React from 'react';
import _ from 'lodash';

function Table(props) {
    const {option} = props;

    return (<div className={'y-table'}>
        {_.map(option,o=>{

        })}
    </div>);
}

export default Table;

function Row(props) {
    const {data} = props;

    return <div className="y-table-row">

    </div>
}
