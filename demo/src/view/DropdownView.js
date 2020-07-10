import React from 'react';
import {Card,Dropdown} from '../lib';

function DropdownView(props) {
    const options = Array.from(Array(700),(o,i)=>({value:i,text:`第${i}项`}));
    return <Card title={'DropdownView'} contentStyle={{minHeight:480}}>
        <Dropdown options={options} defaultValue={4} onChange={console.log}/>
        <Dropdown />
    </Card>
}

export default DropdownView;
