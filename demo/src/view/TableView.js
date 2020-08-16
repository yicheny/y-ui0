import React from 'react';
import {Table} from '../lib';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'基础用法',
        source:require('../../doc/Table/基础用法.md'),
    },
    {
        title:'API',
        source:require('../../doc/Table/API.md'),
    }
]

function TableView(props) {
    return <MarkdownContainer options={options} commonDependencies={{Table}}/>
}

export default TableView;
