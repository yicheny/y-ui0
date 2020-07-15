import React from 'react';
import {Card,CheckboxGroup,Checkbox} from '../lib';

function CheckboxView(props) {
    return <Card title='CheckboxView'>
        <CheckboxGroup defaultValues={[2]} onChange={console.log}>
            <Checkbox value={1}>A</Checkbox>
            <Checkbox value={2}>B</Checkbox>
            <Checkbox value={3}>C</Checkbox>
            <Checkbox value={4}>D</Checkbox>
        </CheckboxGroup>
    </Card>
}

export default CheckboxView;
