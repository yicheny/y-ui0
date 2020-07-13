import React from 'react';
import {Button,message,Card} from "../lib";

function MessageView(props) {
    return (<Card title='消息提示框'>
        <Button onClick={()=>message.show({info:"提示信息",icon:'info'})}>点击出现普通信息</Button>
        <Button onClick={()=>message.show({info:"提示信息AAAA",icon:'success'})}>点击出现成功信息</Button>
        <Button onClick={()=>message.show({info:"提示信息BBBBBBBB",icon:'warn'})}>点击出现警告提示</Button>
        <Button onClick={()=>message.show({info:"提示信息CCCCCCCCCCCC",icon:'error'})}>点击出现错误提示</Button>
    </Card>);
}

export default MessageView;
