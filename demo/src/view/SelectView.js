import React from 'react';
import {Select} from '../lib';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'基础用法',
        source:require('../../doc/Select/基础用法.md'),
    },
    {
        title:'设置初始值',
        source:require('../../doc/Select/设置初始值.md'),
    },
    {
        title:'模糊搜索',
        source:require('../../doc/Select/模糊搜索.md'),
    },
    {
        title:'禁用模式',
        source:require('../../doc/Select/禁用模式.md'),
    },
    {
        title:'清除功能',
        source:require('../../doc/Select/清除功能.md'),
    },
    {
        title:'占位符提示',
        source:require('../../doc/Select/占位符提示.md'),
    },
    {
        title:'API',
        source:require('../../doc/Select/API.md'),
    }
]

function SelectView(props) {
    return <MarkdownContainer options={options} commonDependencies={{Select}}/>
}

export default SelectView;
