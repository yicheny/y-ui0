import React from 'react';
import {Card,Dropdown} from '../lib';

function DropdownView(props) {
    const options = Array.from(Array(700),(o,i)=>({value:i,text:`第${i}项`.repeat(Math.round(i/200 +1))}));
    return <div>
        <Card title={'DropdownView'} contentStyle={{minHeight:80,backgroundColor:'aliceblue'}}>
            <Dropdown options={options} onChange={console.log} search placeholder='这里支持模糊筛选'/>
            <Dropdown options={options} defaultValue={4} disabled/>
            <Dropdown options={options} defaultValue={4} />
            <Dropdown />
        </Card>
    </div>
}

export default DropdownView;
