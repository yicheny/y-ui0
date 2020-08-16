import React from 'react';
import {message,Button} from '../lib';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'基础用法',
        source:require('../../doc/Message/基础用法.md'),
    },
    {
        title:'设置图标',
        source:require('../../doc/Message/设置图标.md'),
    },
    {
        title:'设置过渡时间',
        source:require('../../doc/Message/设置过渡时间.md'),
    },
    {
        title:'API',
        source:require('../../doc/Message/API.md'),
    }
]

function MessageView(props) {
    return <MarkdownContainer options={options} commonDependencies={{message,Button}}/>
}

export default MessageView;
