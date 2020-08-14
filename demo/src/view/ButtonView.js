import React from 'react';
import {Button} from '../lib';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'基础用法',
        source:require('../../doc/Button/基础用法.md'),
    },
    {
        title:'API',
        source:require('../../doc/Button/API.md'),
    }
]

function HomeView(props) {
    return <MarkdownContainer options={options} commonDependencies={{Button}}/>
}

export default HomeView;
