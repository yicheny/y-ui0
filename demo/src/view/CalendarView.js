import React from 'react';
import {Calendar} from '../lib';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'基础用法',
        source:require('../../doc/DatePicker/基础用法.md'),
    },
    {
        title:'设置选择日期',
        source:require('../../doc/Calendar/设置选择日期.md'),
    },
    {
        title:'API',
        source:require('../../doc/DatePicker/API.md'),
    }
]

function View(props) {
    return <MarkdownContainer options={options} commonDependencies={{Calendar}}/>
}

export default View;
