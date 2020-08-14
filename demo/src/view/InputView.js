import React from 'react';
import {Input} from '../lib';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'基础用法',
        source:require('../../doc/Input/基础用法.md'),
    },
    {
        title:'占位符',
        source:require('../../doc/Input/占位符.md'),
    },
    {
        title:'API',
        source:require('../../doc/Input/API.md'),
    }
]

function View(props) {
    return <MarkdownContainer options={options} commonDependencies={{Input}}/>
}

export default View;
