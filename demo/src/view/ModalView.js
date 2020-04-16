import React,{useState} from 'react';
import {Button, Card} from "../lib";
import Modal from "./Modal/Modal";

function ModalView(props) {
    const [show,setShow] = useState(false);
    return (<div>
        <Card title='对话框'>
            <Button primary onClick={()=>setShow(true)}>Open Modal</Button>
            <Modal visible={show} cancel={()=>setShow(false)} confirm={()=>setShow(false)}>
                对话框内容
            </Modal>
        </Card>
    </div>);
}

export default ModalView;
