import React from 'react';
import {Checkbox,CheckboxGroup} from '../lib';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'基础用法',
        source:require('../../doc/Checkbox/基础用法.md'),
    },
    {
        title:'组合使用',
        source:require('../../doc/Checkbox/组合使用.md'),
    },
    {
        title:'API',
        source:require('../../doc/Checkbox/API.md'),
    }
]

function CheckboxView(props) {
    return <MarkdownContainer options={options} commonDependencies={{Checkbox,CheckboxGroup}}/>
}

export default CheckboxView;
