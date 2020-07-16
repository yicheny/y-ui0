import React from 'react';
import {Card} from '../lib';
import {Markdown} from "y-markdown/lib";
import doc from '../../../README.md';

function HomeView(props) {
    return (<Card>
        <Markdown>{doc}</Markdown>
    </Card>);
}

export default HomeView;
