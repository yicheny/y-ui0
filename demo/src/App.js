import React from 'react';
import {Menu} from './lib';
import './App.scss';
// import "../../src/style.scss";

const Menu_option = {
    details:[
        {text: 'A'},
        {
            text: 'B',
            children: [
                {text: 'B-1'},
                {text: 'B-2'},
                {text: 'B-3'},
            ]
        },
        {
            text: 'C',
            children: [
                {text: 'C-1'},
                {
                    text: 'C-2',
                    children:[
                        {text:'C-2-1'},
                        {text:'C-2-2'}
                    ]
                }
            ]
        }
    ]
}

function App(props) {
    return (<div className='app'>
        <Menu option={Menu_option}/>
    </div>);
}

export default App;