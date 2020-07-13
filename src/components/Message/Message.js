import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import {Icon} from "../../index";

function Notice(props) {
    const {info,icon,duration} = props;

    return <div className='notice' style={{animation:`${duration}ms linear 0s 1 normal none running spin`}}>
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
        this.duration = 3500;
        this.infoQueue = [];
        this.maxLength = 15;
    }

    autoDestroy = ()=>{
        const timeId = setTimeout(()=>{
            if(_.isEmpty(this.infoQueue)) return null;
            const div = this.infoQueue.shift();
            div.parentNode.removeChild(div);
            clearTimeout(timeId);
        },this.duration);
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
        ReactDOM.render(<Notice {...option} duration={this.duration}/>,div);
    };

    show = (option,duration)=>{
        if(duration) this.duration=duration;
        this.addEle(option);
        this.autoDestroy();
    };
}

const message = new Message();
export default message;
