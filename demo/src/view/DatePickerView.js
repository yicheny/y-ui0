import React from 'react';
import {Card,Calendar,DatePicker} from '../lib';

function DatePickerView(props) {
    return <div>
        <Card title='日期面板-Calendar' contentStyle={{display:'flex'}}>
            <Calendar style={{marginRight:16}}/>
            <Calendar value={new Date(2024,8,1)}/>
        </Card>

        <Card title='日期选择器-DatePicker' contentStyle={{display:'flex',minHeight:348}}>
            <DatePicker onChange={console.log}/>
            <DatePicker value={new Date(2030,6,1)} onChange={console.log}/>
        </Card>
    </div>;
}

export default DatePickerView;
