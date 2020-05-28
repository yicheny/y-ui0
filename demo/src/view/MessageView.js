import React from 'react';
import {Button,message} from "../lib";

function MessageView(props) {
    return (<div>
            <Button onClick={()=>message.show({info:"提示信息",icon:'success'})}>点击</Button>
        </div>);
}

export default MessageView;
