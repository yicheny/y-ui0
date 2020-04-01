import React,{useState} from 'react';
import {Input,Card} from "../lib";

function print(...x) {
    console.log('print',...x);
}

function InputView(props) {
    const [list,setList] = useState([]);
    return <div>
        <Card title='这里展示与原生完全相同的属性'>
            <Input defaultValue='设置默认值'/>
            <Input placeholder='设置占位符'/>
        </Card>

        <Card title='这里展示与原生相比略有变动的属性'>
            <Input onBlur={addItem} placeholder='失去焦点时触发'/>
        </Card>

        <Card title='这里展示自定义属性'>
            <Input onEnter={addItem} placeholder='按下回车时触发'/>
        </Card>

        <Card title='列表展示'>
            {list.map((x,i)=><li key={i}>{x}</li>)}
        </Card>
    </div>;

    function addItem(v) {
        setList(l=>l.concat([v]));
    }
}

export default InputView;