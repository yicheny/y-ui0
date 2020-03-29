import React, {createContext, useContext} from 'react';
import './Menu.scss';

const MenuContext = createContext({});

function MenuItem(props) {
    const {data: {text, children}, level} = props;
    const {indent} = useContext(MenuContext);

    return <div className='y-Menu-item'>
        <div className='y-Menu-item-main' style={{paddingLeft:level * indent}}>{text}</div>
        {children && children.map((e, i) => <MenuItem key={i} data={e} level={level + 1}/>)}
    </div>
}

function Menu(props) {
    const {option: {details, indent = 20}} = props;
    const contextData = {indent};
    return <MenuContext.Provider value={contextData}>
        <div className="y-Menu">
            {details.map((e, i) => <MenuItem key={i} data={e} level={1}/>)}
        </div>
    </MenuContext.Provider>
}

export default Menu;