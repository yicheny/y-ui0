import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {Menu} from './lib';
// import {Menu_option} from './data/menuData';
import './App.scss';
import "../../src/style.scss";
import ButtonView from "./view/ButtonView";
import ReadmeView from "./view/ReadmeView";
import VersionLogView from "./view/VersionLogView";
import InputView from "./view/InputView";
import DatePickerView from "./view/DatePickerView";
import TableView from "./view/TableView";
import ListView from "./view/ListView";
import ModalView from "./view/ModalView";
import MessageView from "./view/MessageView";
import SelectView from "./view/SelectView";
import RadioView from "./view/RadioView";
import CheckboxView from "./view/CheckboxView";
import TooltipView from "./view/TooltipView";
import AnchorView from "./view/AnchorView";
import CalendarView from "./view/CalendarView";

const Menu_option = {
    details:[
        {text:'README'},
        {text:'版本更新记录',to:'versionLog'},
        {
            text:'组件',
            expanded: true,
            children:[
                {text:'Button 按钮',to:'Button'},
                {text:'Input 输入框',to:'Input'},
                {text:'Calendar 日历',to:'Calendar'},
                {text:'DatePicker 日期选择器',to:'DatePicker'},
                {text:'Table 表格',to:'Table'},
                {text:'List 列表',to:'List'},
                {text:'Modal 对话框',to:'Modal'},
                {text:'Message 全局提示',to:'Message'},
                {text:'Select 选择器',to:'Select'},
                {text:'Radio 单选框',to:'Radio'},
                {text:'Checkbox 多选框',to:'Checkbox'},
                {text:'Tooltip 文字提示',to:'Tooltip'},
                {text:'Anchor 锚点',to:'Anchor'}
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
                <Route path='/Button' component={ButtonView}/>
                <Route path='/Input' component={InputView}/>
                <Route path='/Calendar' component={CalendarView}/>
                <Route path='/DatePicker' component={DatePickerView}/>
                <Route path='/Table' component={TableView}/>
                <Route path='/List' component={ListView}/>
                <Route path='/Modal' component={ModalView}/>
                <Route path='/Message' component={MessageView}/>
                <Route path='/Select' component={SelectView}/>
                <Route path='/Radio' component={RadioView}/>
                <Route path='/Checkbox' component={CheckboxView}/>
                <Route path='/Tooltip' component={TooltipView}/>
                <Route path='/Anchor' component={AnchorView}/>
                <Route path='/VersionLog' component={VersionLogView}/>
                <Route component={ReadmeView}/>
            </Switch>
        </div>
    </div>);
}

export default App;
