import React from 'react';
import {Button} from '../lib';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'README',
        source:require('../../doc/Button/基础用法.md'),
    }
]

function HomeView(props) {
    return <MarkdownContainer options={options} dependencies={Button}/>
}

export default HomeView;
