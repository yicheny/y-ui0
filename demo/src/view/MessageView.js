import React from 'react';
import {Button,message,Card} from "../lib";

function MessageView(props) {
    return (<Card title='消息提示框'>
        <Button onClick={()=>message.show({info:"提示信息",icon:'success'})}>点击出现提示</Button>
    </Card>);
}

export default MessageView;
