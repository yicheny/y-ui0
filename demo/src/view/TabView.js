import React from 'react';
import {Tab,TabItem} from '../lib';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'基础用法',
        source:require('../../doc/Tab/基础用法.md'),
    },
    {
        title:'API',
        source:require('../../doc/Tab/API.md'),
    },
]

function TabView(props) {
    return <MarkdownContainer options={options} commonDependencies={{Tab,TabItem}}/>
}

export default TabView;
