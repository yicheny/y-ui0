import React from 'react';
import {Card,List} from "../lib";

const data = Array.from(Array(6),(x,i)=>{
    return {title:`第${i+1}行标题`,text:`第${i+1}行内容`}
});
function ListView(props) {
    return <div>
        <Card title='ListView'>
            <List data={data} header='列表标题' footer='列表腿部'/>
        </Card>
    </div>
}

export default ListView;
