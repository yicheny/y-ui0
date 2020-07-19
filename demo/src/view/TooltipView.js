import React from 'react';
import {Card, Tooltip} from "../lib";

const info = '这是一段测试信息'.repeat(1);

function TooltipView(props) {
    return <Card title='TooltipView'>
        <Tooltip title={info}>Top</Tooltip> <br/>
        <Tooltip title={info} placement='right'>Right</Tooltip> <br/>
        <Tooltip title={info} placement='bottom'>Bottom</Tooltip> <br/>
        <Tooltip title={info} placement='left'>Left</Tooltip> <br/>
    </Card>
}

export default TooltipView;
