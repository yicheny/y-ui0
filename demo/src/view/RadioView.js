import React from 'react';
import {Radio,RadioGroup} from '../lib';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'基础用法',
        source:require('../../doc/Radio/基础用法.md'),
    },
    {
        title:'设置初始选中',
        source:require('../../doc/Radio/设置初始选中.md'),
    },
    {
        title:'单选组合',
        source:require('../../doc/Radio/单选组合.md'),
    },
    {
        title:'API',
        source:require('../../doc/Radio/API.md'),
    }
]

function RadioView(props) {
    return <MarkdownContainer options={options} commonDependencies={{Radio,RadioGroup}}/>
}

export default RadioView;
