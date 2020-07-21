import React from 'react';
import {Anchor} from "../../../src";

const option = Array.from(Array(9),(x,i)=>({title:`这是第${i}个元素${'x'.repeat(i*2)}`,id:i.toString()}));

function AnchorView(props) {
    return <div className='anchor-view'>
        <div className="content">
            {
                option.map((x,i)=>{
                    return <div key={i} id={x.id} style={{height:600,margin:16,background:'yellowgreen'}}>
                        {x.title}
                    </div>
                })
            }
        </div>

        <div className="menu" style={{width:180}}>
            <Anchor option={option}/>
        </div>

        <style jsx>{`
        .anchor-view>.content{
            margin-right:240px;
        }
        .anchor-view>.menu{
            position:fixed;
            top:24px;
            right:40px;
        }
        `}</style>
    </div>;
}

export default AnchorView;
