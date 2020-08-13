import React from "react";
import _ from 'lodash';
import {Card,Anchor} from '../lib';
import CodeView from "y-code-view";
import './MarkdownContainer.scss';

export default function MarkdownContainer(props) {
    const {options,commonDependencies} = props;

    return <div className="md">
        <div className="md-content">
            {
                _.map(options,(opt,i)=>{
                    const {title,dependencies,source,showCode} = opt;
                    return <div id={title} key={i}>
                        <Card title={title}>
                            <CodeView source={source}
                                      delay={900}
                                      // theme='neo'
                                      dependencies={{...dependencies,...commonDependencies}}
                                      showCode={showCode}/>
                        </Card>
                    </div>
                })
            }
            <div className="anchor-wrap">
                <Anchor option={_.map(options,x=>({title:x.title,id:x.title}))}/>
            </div>
        </div>
    </div>
}
