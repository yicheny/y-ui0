import React,{useState} from 'react';
import {Card,Radio,RadioGroup} from '../lib';

function RadioView(props) {
    return <Card title='RadioView'>
        <RadioGroup defaultValue={2} onChange={console.log}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
        </RadioGroup>
    </Card>
}

export default RadioView;
