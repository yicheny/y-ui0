import React,{Fragment,useCallback} from 'react';
import clsx from "clsx";
import _ from "lodash";
import {Icon,Button} from "../../lib";
import './Modal.scss';

//UI组件
function Modal(props) {
    const {visible,children,header,footerVisible,confirm,cancel,confirmText,cancelText,confirmVisible,cancelVisible,className,style} = props;

    const handleCancel = useCallback((e)=>{
        eventExecute(cancel,e)
    },[cancel]);

    const handleConfirm = useCallback((e)=>{
        eventExecute(confirm,e)
    },[confirm]);

    return <Fragment>
        {
            visible && <div className='y-modal-wrapper'>
                <div className={clsx("y-modal",className)} style={style}>
                    <div className="y-modal-header">
                        <span className="y-modal-header-title">{header}</span>
                        <span className="y-modal-header-exit" onClick={handleCancel}>
                <Icon name='cancel' size={12}/>
            </span>
                    </div>
                    <div className="y-modal-content">
                        {children}
                    </div>
                    {
                        footerVisible && <div className="y-modal-footer">
                            {confirmVisible && <Button primary onClick={handleConfirm}>{confirmText}</Button>}
                            {cancelVisible && <Button cancel onClick={handleCancel}>{cancelText}</Button>}
                        </div>
                    }
                </div>
            </div>
        }
    </Fragment>
}
Modal.defaultProps = {
    visible:true,
    header: "默认标题",
    confirm: () => {},
    cancel: () => {},
    confirmText:'确定',
    cancelText:'取消',
    footerVisible:true,
    confirmVisible:true,
    cancelVisible:true
};

export default Modal;

//逻辑函数
export function eventExecute(cb,...params) {
    return _.isFunction(cb) && cb(...params);
}
