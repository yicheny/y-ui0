import React from 'react';
import ReactDOM from 'react-dom';
import {Icon} from "../../index";

function Notice(props) {
    const {info,icon} = props;

    return <div className='notice'>
        {icon && <Icon name={icon} size={18}/>}
        {info}
    </div>
}
Notice.defaultProps={
    info:'',
    icon:''
};

class Message{
    constructor(){
        this.box = null;
        this.timeId = null;
        this.destoryTime = 4500;
        this.infoQueue = [];
    }

    autoDestory = ()=>{
        this.timeId = setTimeout(()=>{
            const div = this.infoQueue.shift();
            div.parentNode.removeChild(div);
        },this.destoryTime);
    };

    addBox = ()=>{
        if(!this.box){
            this.box = document.createElement('div');
            this.box.className = 'y-message-box';
            document.body.appendChild(this.box);
        }
    };

    addEle = (option)=>{
        this.addBox();
        const div = document.createElement('div');
        div.className = 'y-message';
        this.box.appendChild(div);
        this.infoQueue.push(div);
        ReactDOM.render(<Notice {...option}/>,div);
    };

    show = (option,destoryTime)=>{
        if(destoryTime) this.destoryTime=destoryTime;
        this.addEle(option);
        this.autoDestory();
    };
}

const message = new Message();
export default message;
