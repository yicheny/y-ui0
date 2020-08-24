import React from 'react';
import {Tooltip} from '../lib';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'基础用法',
        source:require('../../doc/Tooltip/基础用法.md'),
    },
    {
        title:'API',
        source:require('../../doc/Tooltip/API.md'),
    }
]

function TooltipView(props) {
    return <MarkdownContainer options={options} commonDependencies={{Tooltip}}/>
}

export default TooltipView;
