import React,{useRef,useEffect} from 'react';
import _ from 'lodash';

function Cell(props) {
    const {data, value} = props;
    const {width, align} = data;
    return <span className="y-table-cell" style={{minWidth:width,textAlign: align}}>{value}</span>;
}

function Table(props) {
    const {columns, dataSource} = props;
    const headerRef = useRef();
    const contentRef = useRef();

    const scrollHandle = ()=>{
        console.log('scrollHandle');
        headerRef.current.style.transform = `translateX(-${contentRef.current.scrollLeft}px)`;
    };

    return (<div className='y-table'>
        <div className="y-table-inner" onScroll={scrollHandle} ref={contentRef}>
            <div className="y-table-header" ref={headerRef}>
                <div className="y-table-row">
                    {
                        _.map(columns, (c, i) => {
                            return <Cell data={c} value={c.name} key={i}/>
                        })
                    }
                </div>
            </div>
            <div className="y-table-content">
                {
                    _.map(dataSource, (d, i) => {
                        return <div className='y-table-row' key={i}>
                            {
                                _.map(columns, (c, i2) => {
                                    const code = c.code;
                                    let value = _.isString(code) ? d[code] : null;
                                    if (_.isFunction(c.render)) value = c.render(value, d, i);
                                    return <Cell data={c} value={value} key={i2}/>
                                })
                            }
                        </div>
                    })
                }
            </div>
        </div>
    </div>);
}

export default Table;
