import React from 'react';
import {Card, Tooltip} from "../lib";

const info = '这是一段测试信息'.repeat(3);

function TooltipView(props) {
    return <Card title='TooltipView'>
        <Tooltip title={info}>
            这是一段测试信息
        </Tooltip>
    </Card>
}

export default TooltipView;
