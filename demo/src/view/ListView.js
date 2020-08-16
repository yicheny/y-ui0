import React from 'react';
import {List} from '../lib';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'基础用法',
        source:require('../../doc/List/基础用法.md'),
    },
    {
        title:'API',
        source:require('../../doc/List/API.md'),
    }
]

function ListView(props) {
    return <MarkdownContainer options={options} commonDependencies={{List}}/>
}

export default ListView;
