import React from 'react';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'README',
        source:require('../../../README.md'),
    },
    {
        title:'版本更新记录',
        source:require('../../../VersionLog.md'),
    }
]

function HomeView(props) {
    return <MarkdownContainer options={options}/>
}

export default HomeView;
