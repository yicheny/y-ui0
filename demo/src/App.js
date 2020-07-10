import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {Menu} from './lib';
// import {Menu_option} from './data/menuData';
import './App.scss';
import "../../src/style.scss";
import ButtonView from "./view/ButtonView";
import HomeView from "./view/HomeView";
import InputView from "./view/InputView";
import DatePickerView from "./view/DatePickerView";
import TableView from "./view/TableView";
import ListView from "./view/ListView";
import ModalView from "./view/ModalView";
import MessageView from "./view/MessageView";
import DropdownView from "./view/DropdownView";

const Menu_option = {
    details:[
        {text:'首页'},
        {
            text:'组件',
            expanded: true,
            children:[
                {text:'Button',to:'button'},
                {text:'Input',to:'input'},
                {text:'DatePicker',to:'date_picker'},
                {text:'Table',to:'table'},
                {text:'List',to:'list'},
                {text:'Modal',to:'modal'},
                {text:'Message',to:'message'},
                {text:'Dropdown',to:'dropdown'}
            ]
        }
    ]
};

function App(props) {
    return (<div className='app'>
        <Menu option={Menu_option}/>
        {/*<Menu option={Demo_Menu_option}/>*/}
        <div className="app-content">
            <Switch>
                <Route path='/button' component={ButtonView}/>
                <Route path='/input' component={InputView}/>
                <Route path='/date_picker' component={DatePickerView}/>
                <Route path='/table' component={TableView}/>
                <Route path='/list' component={ListView}/>
                <Route path='/modal' component={ModalView}/>
                <Route path='/message' component={MessageView}/>
                <Route path='/dropdown' component={DropdownView}/>
                <Route component={HomeView}/>
            </Switch>
        </div>
    </div>);
}

export default App;
