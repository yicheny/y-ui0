import React, {createContext, useContext, useState,useMemo, useLayoutEffect,useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import _ from 'lodash';
import cls from 'clsx';
import Icon from '../Icon';
import {useExactHeight} from "../../utils/hook";

const MenuContext = createContext({});

//UI组件
function Menu(props) {
    const {option: {details, indent = 20},history} = props;
    const [expands,setExpands] = useState(findExpanded(details));
    const [path,setPath] = useState(history.location.pathname);
    const contextData = {indent, action, path};

    useEffect(()=>{
        let unListen = history.listen(()=>setPath(history.location.pathname));
        return ()=>{
            unListen();
            unListen = undefined;
        };
    },[history]);

    return <MenuContext.Provider value={contextData}>
        <div className="y-menu">
            {details.map((e, i) => <MenuItem key={i} data={e} level={1} expands={expands}/>)}
        </div>
    </MenuContext.Provider>;

    function action(x) {
        if (arrayHasData(x.children)) {
            if (_.includes(expands, x)) _.pull(expands, x);
            else expands.push(x);
            return setExpands([...expands]);
        }
        if(targetFor(x)) return history.push(targetFor(x));
    }
}

const Menu_ = withRouter(Menu);//通过withRouter为Menu传递路由参数
export default Menu_;

function MenuItem(props) {
    const {data, data: {text, children}, level, expands} = props;
    const {indent, action, path} = useContext(MenuContext);
    const expanded = useMemo(() =>_.includes(expands, data), [data, expands]);

    const [exactContainerRef,containerRef,updateHeight] = useExactHeight();

    useLayoutEffect(()=>{
       return updateHeight(expanded);
    },[expanded,updateHeight]);

    return <div className='y-menu-item'>
        <div className={cls('y-menu-item-header', {expanded, active: activeFor()})} style={{paddingLeft: level * indent}}
             onClick={() => action(data)}>
            <span className="y-menu-item-text">{text}</span>
            {children && <Icon name='arrowDown' size={16}/>}
        </div>
        {children && <div className="y-menu-sub" ref={exactContainerRef} onTransitionEnd={transitionEnd}>
            <div className="y-menu-item-container" ref={containerRef}>
                {children.map((e, i) => <MenuItem key={i} data={e} level={level + 1} expands={expands}/>)}
            </div>
        </div>}
    </div>;

    function transitionEnd() {
        if(expanded) exactContainerRef.current.style.height = 'auto';//设置为`auto`的原因是需要保证子级菜单展开时，父级菜单的高度响应变化
    }

    function activeFor() {
        return expanded ? false : pathCheck(data,path);
    }
}

//逻辑函数
function findExpanded(data, array = []) {
    if (!Array.isArray(array)) array = [];
    _.forEach(data, o => {
        if (o.expanded && arrayHasData(o.children)) array.push(o);
        findExpanded(o.children, array);
    });
    return array;
}

function arrayHasData(x) {
    return Array.isArray(x) && x.length > 0
}

function targetFor(x={}){
    let target = x.to;
    if(!target) target = x.text;
    if(target && !_.startsWith(target,'/')) target = '/'.concat(target);
    return target;
}

function pathCheck(data,path) {
    if(arrayHasData(data.children)){
        return data.children.some(o=>pathCheck(o,path))
    }
    const target = targetFor(data);
    return path === target || (_.startsWith(path, target) && path[target.length] === "/");
}
