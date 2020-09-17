import React from 'react';
import {TextArea} from '../lib';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'基础用法',
        source:require('../../doc/TextArea/基础用法.md'),
    },
    {
        title:'API',
        source:require('../../doc/TextArea/API.md'),
    }
]

function TextAreaView(props) {
    return <MarkdownContainer options={options} commonDependencies={{TextArea}}/>
}

export default TextAreaView;
