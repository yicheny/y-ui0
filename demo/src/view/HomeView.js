import React from 'react';
import doc from '../../../README.md';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'README',
        source:doc,
    }
]

function HomeView(props) {
    return <MarkdownContainer options={options}/>
}

export default HomeView;
