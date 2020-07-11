import React from 'react';
import {Markdown} from "y-markdown/lib";
import doc from '../../../README.md';

function HomeView(props) {
    return (<div className='box'>
        <Markdown>{doc}</Markdown>
    </div>);
}

export default HomeView;
