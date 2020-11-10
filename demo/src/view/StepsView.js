import React from 'react';
import {Steps,Step} from '../lib';
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
        title:'API',
        source:require('../../doc/Steps/API.md'),
    },
]

function StepsView(props) {
    return <MarkdownContainer options={options} commonDependencies={{Steps,Step}}/>
}

export default StepsView;
