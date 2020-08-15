import React from 'react';
import {DatePicker} from '../lib';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'基础用法',
        source:require('../../doc/DatePicker/基础用法.md'),
    },
    {
        title:'设置清空',
        source:require('../../doc/DatePicker/设置清空.md'),
    },
    {
        title:'API',
        source:require('../../doc/DatePicker/API.md'),
    }
]

function View(props) {
    return <MarkdownContainer options={options} commonDependencies={{DatePicker}}/>
}

export default View;
