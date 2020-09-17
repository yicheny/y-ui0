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
import SwitchView from "./view/SwitchView";
import TabView from "./view/TabView";
import TextAreaView from "./view/TextAreaView";

const Menu_option = {
    details:[
        {text:'README'},
        {text:'版本更新记录',to:'versionLog'},
        {
            text:'组件',
            expanded: true,
            children:[
                // {text:'Anchor 锚点',to:'Anchor'},
                {text:'Button 按钮',to:'Button'},
                {text:'Calendar 日历',to:'Calendar'},
                {text:'Checkbox 多选框',to:'Checkbox'},
                {text:'DatePicker 日期选择器',to:'DatePicker'},
                {text:'Input 输入框',to:'Input'},
                {text:'List 列表',to:'List'},
                {text:'Message 全局提示',to:'Message'},
                {text:'Modal 对话框',to:'Modal'},
                {text:'Radio 单选框',to:'Radio'},
                {text:'Select 选择器',to:'Select'},
                {text:'Switch 开关',to:'Switch'},
                {text:'Tab 标签页',to:'Tab'},
                {text:'Table 表格',to:'Table'},
                {text:'TextArea 文本域',to:'TextArea'},
                {text:'Tooltip 文字提示',to:'Tooltip'},
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
                <Route path='/Anchor' component={AnchorView}/>
                <Route path='/Button' component={ButtonView}/>
                <Route path='/Calendar' component={CalendarView}/>
                <Route path='/Checkbox' component={CheckboxView}/>
                <Route path='/DatePicker' component={DatePickerView}/>
                <Route path='/Input' component={InputView}/>
                <Route path='/List' component={ListView}/>
                <Route path='/Message' component={MessageView}/>
                <Route path='/Modal' component={ModalView}/>
                <Route path='/Radio' component={RadioView}/>
                <Route path='/Select' component={SelectView}/>
                <Route path='/Switch' component={SwitchView}/>
                <Route path='/Tab' component={TabView}/>
                <Route path='/Table' component={TableView}/>
                <Route path='/TextArea' component={TextAreaView}/>
                <Route path='/Tooltip' component={TooltipView}/>
                <Route path='/VersionLog' component={VersionLogView}/>
                <Route component={ReadmeView}/>
            </Switch>
        </div>
    </div>);
}

export default App;
