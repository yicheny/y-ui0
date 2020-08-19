import React,{useState} from 'react';
import {Checkbox,CheckboxGroup,Button} from '../lib';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'基础用法',
        source:require('../../doc/Checkbox/基础用法.md'),
    },
    {
        title:'设置初始选中',
        source:require('../../doc/Checkbox/设置初始选中.md'),
    },
    {
        title:'设置当前选中',
        source:require('../../doc/Checkbox/设置当前选中.md'),
        dependencies:{Button,useState}
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
