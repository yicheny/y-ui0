import React from 'react';
import _ from 'lodash';
import {Card,Table} from '../lib'
import {N2} from '../utils/format';
import {data} from '../data/tableData';
import './TableView.scss';

const dataSource = _.orderBy(data.slice(0,40),'strategy');
const columns = [
    // {name:'#',render:(v,o,i)=>i+1,width:48,align:'center',lock:true},
    {name:'投资策略',code:'strategy',width:100,align:'left',lock:true,rowSpan:true},
    {name:'名称',code:'productName',width:420,align:'left',lock:true},
    {name:'管理机构',code:'fundAdmin',width:160,align:'left'},
    {name:'基金经理',code:'manager',width:160,align:'left'},
    {name:'成立年限(年)',code:'duration',width:100,align:'right'},
    {name:'最新净值',code:'unitNetValue',render:N2,width:100,align:'right'},
    {name:'自成立收益率',code:'pnlPctAll',render:N2,width:100,align:'right'},
    {name:'自成立波动率',code:'volAll',render:N2,width:100,align:'right'},
    {name:'自成立夏普比率',code:'sharpeAll',render:N2,width:120,align:'right'},
    {name:'近一年收益率',code:'pnlPctY1',render:N2,width:100,align:'right'},
    {name:'近一年波动率',code:'volY1',render:N2,width:100,align:'right'},
    {name:'综合能力',code:'overallPerf',render:N2,width:100,align:'right'},
];

function TableView(props) {
    return <div className="table-view">
        <Card title='TableView' contentStyle={{overflow:'auto',display:'flex'}}>
            <Table columns={columns} dataSource={dataSource} className='table1'/>
        </Card>
    </div>
}

export default TableView;
