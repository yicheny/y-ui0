import React from 'react';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'README',
        source:require('../../../README.md'),
    },
]

function ReadmeView(props) {
    return <MarkdownContainer options={options}/>
}

export default ReadmeView;
