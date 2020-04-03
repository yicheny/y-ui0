import React,{useState} from 'react';
import {Button, Card} from '../../lib';
import {DatePickerMainPanel} from "./DatePicker";

function DatePickerView(props) {
    return <div>
        <Card title='日期面板'>
            <DatePickerMainPanel initValue={new Date()}/>
        </Card>
    </div>;
}

export default DatePickerView;