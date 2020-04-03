import React from 'react';
import {Card} from '../../lib';
import {Calendar} from "./Calendar";

function DatePickerView(props) {
    return <div>
        <Card title='日期面板'>
            <Calendar initValue={new Date()}/>
        </Card>
    </div>;
}

export default DatePickerView;