import React from 'react';
import {Dropdown} from '../lib';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'基础用法',
        source:require('../../doc/Dropdown/基础用法.md'),
    },
    {
        title:'设置初始值',
        source:require('../../doc/Dropdown/设置初始值.md'),
    },
    {
        title:'模糊搜索',
        source:require('../../doc/Dropdown/模糊搜索.md'),
    },
    {
        title:'禁用模式',
        source:require('../../doc/Dropdown/禁用模式.md'),
    },
    {
        title:'清除功能',
        source:require('../../doc/Dropdown/清除功能.md'),
    },
    {
        title:'占位符提示',
        source:require('../../doc/Dropdown/占位符提示.md'),
    },
    {
        title:'API',
        source:require('../../doc/Dropdown/API.md'),
    }
]

function DropdownView(props) {
    return <MarkdownContainer options={options} commonDependencies={{Dropdown}}/>
}

export default DropdownView;
