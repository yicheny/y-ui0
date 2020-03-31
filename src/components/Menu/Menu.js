import React, {createContext, useContext, useState,useMemo, useRef, useLayoutEffect,useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import _ from 'lodash';
import cls from 'clsx';
import Icon from '../Icon';

const MenuContext = createContext({});

function MenuItem(props) {
    const {data, data: {text, children}, level, expands} = props;
    const sub = useRef();
    const container = useRef();
    const {indent, action, path} = useContext(MenuContext);
    const expanded = useMemo(() =>_.includes(expands, data), [data, expands]);

    useLayoutEffect(() => {
        if(expanded && sub.current && container.current){
            if(isInit()) sub.current.style.height='auto';//初始化时必须将高度设置为`auto`，否则父级将不能响应子级的高度变化
            else sub.current.style.height = `${container.current.offsetHeight}px`;
        }else{
            if(sub.current){
                if(isInit()) sub.current.style.height = '0px';//用于解决初始化页面闪烁的问题
                else setTimeout(()=>sub.current.style.height = '0px',0)
            }
        }

        return ()=>{
            if (expanded && sub.current && container.current) {
                sub.current.style.height = `${container.current.offsetHeight}px`;
            }
        }
    }, [expanded]);

    return <div className='y-menu-item'>
        <div className={cls('y-menu-item-header', {expanded, active: activeFor()})} style={{paddingLeft: level * indent}}
             onClick={() => action(data)}>
            <span className="y-menu-item-text">{text}</span>
            {children && <Icon name='arrowDown' size={16}/>}
        </div>
        {children && <div className="y-menu-sub" ref={sub} onTransitionEnd={transitionEnd}>
            <div className="y-menu-item-container" ref={container}>
                {children.map((e, i) => <MenuItem key={i} data={e} level={level + 1} expands={expands}/>)}
            </div>
        </div>}
    </div>;

    function transitionEnd() {
        if(expanded) sub.current.style.height = 'auto';//设置为`auto`的原因是需要保证子级菜单展开时，父级菜单的高度响应变化
    }

    function isInit() {
        return sub.current.style.height==='';
    }

    function activeFor() {
        return expanded ? false : pathCheck(data,path);
    }
}

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