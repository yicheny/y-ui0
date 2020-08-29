import React from 'react';
import {Switch} from '../lib';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'基础用法',
        source:require('../../doc/Switch/基础用法.md'),
    },
    {
        title:'设置初始状态',
        source:require('../../doc/Switch/设置初始状态.md'),
    },
    {
        title:'API',
        source:require('../../doc/Switch/API.md'),
    },
]

function SwitchView(props) {
    return <MarkdownContainer options={options} commonDependencies={{Switch}}/>
}

export default SwitchView;
