import React,{useState} from 'react';
import {Button, Card} from "../lib";
import Modal from "../../../src/components/Modal/Modal";

function ModalView(props) {
    const [show,setShow] = useState(false);
    const [move,setMove] = useState(false);
    return (<div>
        <Card title='对话框'>
            <Button primary onClick={()=>{setMove(true);setShow(true);}}>可移动对话框</Button>
            <Button primary onClick={()=>{setMove(false);setShow(true);}}>不可移动对话框</Button>
            <Modal visible={show} move={move} cancel={()=>setShow(false)} confirm={()=>setShow(false)}>
                对话框内容
            </Modal>
        </Card>
    </div>);
}

export default ModalView;
