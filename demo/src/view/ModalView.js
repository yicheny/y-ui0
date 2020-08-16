import React,{useState} from 'react';
import {Modal,Button} from '../lib';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'基础用法',
        source:require('../../doc/Modal/基础用法.md'),
    },
    {
        title:'设置移动',
        source:require('../../doc/Modal/设置移动.md'),
    },
    {
        title:'设置文案',
        source:require('../../doc/Modal/设置文案.md'),
    },
    {
        title:'设置隐藏部分',
        source:require('../../doc/Modal/设置隐藏部分.md'),
    },
    {
        title:'API',
        source:require('../../doc/Modal/API.md'),
    }
]

function ModalView(props) {
    return <MarkdownContainer options={options} commonDependencies={{Modal,Button,useState}}/>
}

export default ModalView;
