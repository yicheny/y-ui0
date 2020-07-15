import React from 'react';
import {Button} from "../lib";

function ButtonView(props) {
    return <div className='box'>
        <Button>标准按钮</Button>
        <Button primary>primary按钮</Button>
        <Button text>text按钮</Button>
        <Button primary disabled>disabled按钮</Button>
        <Button cancel>cancel按钮</Button>
        <Button danger>danger按钮</Button>
    </div>;
}

export default ButtonView;
