import React, {useEffect} from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import {Icon} from "../../index";

function Notice(props) {
    const {info,icon,duration,removeEle} = props;

    useEffect(()=>{
        const timeId = setTimeout(removeEle,[duration]);
        return ()=>clearTimeout(timeId);
    },[duration])

    return <div className='notice' style={{animation:`${duration}ms linear 0s 1 normal none running spin`}}>
        {icon && <Icon name={icon} size={18}/>}
        {info}
    </div>
}
Notice.defaultProps={
    info:null,
    icon:null
};

class Message{
    constructor(){
        this.box = null;
        this.infoQueue = [];
        this.maxLength = 15;
    }

    removeEle = (ele)=>{
        _.pull(this.infoQueue,ele);
        ele.parentNode.removeChild(ele);
    }

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
        ReactDOM.render(<Notice {...option} removeEle={()=>this.removeEle(div)}/>,div);
    };

    show = (option)=>{
        if(!_.isNumber(option.duration)) option.duration = 3000;
        this.addEle(option);
    };
}

const message = new Message();
export default message;
