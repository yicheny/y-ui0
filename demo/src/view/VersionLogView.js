import React from 'react';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title:'版本更新记录',
        source:require('../../../VersionLog.md'),
    }
]

function ReadmeView(props) {
    return <MarkdownContainer options={options}/>
}

export default ReadmeView;
