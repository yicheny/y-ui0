import React from 'react';
import _ from 'lodash';
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
        this.destroyTime = 4500;
        this.infoQueue = [];
        this.maxLength = 15;
    }

    autoDestroy = ()=>{
        const timeId = setTimeout(()=>{
            if(_.isEmpty(this.infoQueue)) return null;
            const div = this.infoQueue.shift();
            div.parentNode.removeChild(div);
            clearTimeout(timeId);
        },this.destroyTime);
    };

    addBox = ()=>{
        if(!this.box){
            this.box = document.createElement('div');
            this.box.className = 'y-message-box';
            document.body.appendChild(this.box);
        }
    };

    addEle = (option)=>{
        if(this.infoQueue.length >= this.maxLength) return ;
        this.addBox();
        const div = document.createElement('div');
        div.className = 'y-message';
        this.box.appendChild(div);
        this.infoQueue.push(div);
        ReactDOM.render(<Notice {...option}/>,div);
    };

    show = (option,destroyTime)=>{
        if(destroyTime) this.destroyTime=destroyTime;
        this.addEle(option);
        this.autoDestroy();
    };
}

const message = new Message();
export default message;
