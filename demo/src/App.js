import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {Menu} from './lib';
// import {Menu_option} from './data/menuData';
import './App.scss';
import "../../src/style.scss";
import ButtonView from "./view/ButtonView";
import HomeView from "./view/HomeView";
import InputView from "./view/InputView";
import DatePickerView from "./view/DatePickerView/DatePickerView";

const Menu_option = {
    details:[
        {text:'首页'},
        {
            text:'组件',
            expanded: true,
            children:[
                {text:'Button',to:'button'},
                {text:'Input',to:'input'},
                {text:'DatePicker',to:'date_picker'}
            ]
        }
    ]
};

function App(props) {
    return (<div className='app'>
        <Menu option={Menu_option}/>
        <div className="app-content">
            <Switch>
                <Route path='/button' component={ButtonView}/>
                <Route path='/input' component={InputView}/>
                <Route path='/date_picker' component={DatePickerView}/>
                <Route component={HomeView}/>
            </Switch>
        </div>
    </div>);
}

export default App;