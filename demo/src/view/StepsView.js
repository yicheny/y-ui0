import React,{useState} from 'react';
import {Steps,Step,message} from '../lib';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'基础用法',
        source:require('../../doc/Steps/基础用法.md'),
    },
    {
        title:'竖直方向',
        source:require('../../doc/Steps/竖直方向.md'),
    },
    {
        title:'可点击',
        source:require('../../doc/Steps/可点击.md'),
    },
    {
        title:'设置初始值',
        source:require('../../doc/Steps/设置初始值.md'),
    },
    {
        title:'控制步骤状态',
        source:require('../../doc/Steps/控制步骤状态.md'),
    },
    {
        title:'API',
        source:require('../../doc/Steps/API.md'),
    },
]

function StepsView(props) {
    return <MarkdownContainer options={options} commonDependencies={{Steps,Step,useState,message}}/>
}

export default StepsView;
