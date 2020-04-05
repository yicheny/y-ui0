import React from 'react';
import {Card} from '../../lib';
import {Calendar} from "./Calendar";
import DatePicker from "./DatePicker";
import {printCbParams} from "../../utils/commonFun";

function DatePickerView(props) {
    return <div>
        <Card title='日期面板-Calendar' contentStyle={{display:'flex'}}>
            <Calendar style={{marginRight:16}}/>
            <Calendar initValue={new Date(2020,4,1)}/>
        </Card>

        <Card title='日期选择器-DatePicker' contentStyle={{minHeight:348}}>
            <DatePicker onChange={printCbParams}/>
        </Card>
    </div>;
}

export default DatePickerView;