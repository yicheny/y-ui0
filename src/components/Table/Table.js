import React,{useRef,useEffect} from 'react';
import _ from 'lodash';

function Cell(props) {
    const {data, value} = props;
    const {width, align} = data;
    return <span className="y-table-cell" style={{width,textAlign: align}}>{value}</span>;
}

function Table(props) {
    const {columns, dataSource} = props;
    const headerRef = useRef();
    const InnerRef = useRef();
    const leftTableRef = useRef();

    const leftLockCount = getLeftLockCount(columns);
    const leftColumns = columns.slice(0,leftLockCount);
    const centerColumns = columns.slice(leftLockCount);
    const leftWidth = getLeftWidth(leftColumns) + 1;//加1是因为有左侧有额外的border

    const scrollHandle = ()=>{
        headerRef.current.style.transform = `translateX(-${InnerRef.current.scrollLeft}px)`;
        leftTableRef.current.style.transform = `translateY(-${InnerRef.current.scrollTop}px)`;
    };

    return (<div className='y-table'>
        <div className="y-table-inner" onScroll={scrollHandle} ref={InnerRef}>
            {leftRender(leftColumns)}
            {centerRender(centerColumns,leftWidth)}
        </div>
    </div>);

    function leftRender(columns) {
        return <div className="y-table-left">
            {headerRender({columns})}
            {contentRender({columns,isRef:leftTableRef})}
        </div>
    }

    function centerRender(columns,leftWidth) {
        return <div className='y-table-center'>
            {headerRender({columns,isRef:headerRef,leftWidth})}
            {contentRender({columns,leftWidth})}
        </div>
    }

    function headerRender(props) {
        const {columns,isRef=false,leftWidth=0} = props;
        return <div className="y-table-header" ref={isRef || undefined} style={{left:leftWidth}}>
            <div className="y-table-row">
                {
                    _.map(columns, (c, i) => {
                        return <Cell data={c} value={c.name} key={i}/>
                    })
                }
            </div>
        </div>;
    }

    function contentRender(props) {
        const {columns,isRef,leftWidth=0} = props;
        return <div className="y-table-content" ref={isRef || undefined} style={{marginLeft:leftWidth}}>
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
        </div>;
    }
}

export default Table;

function getLeftLockCount(columns) {
    let count = 0;
    for(const col of columns){
        if(col.lock) {
            count++
        }else {
            break
        }
    }
    return count;
}

function getLeftWidth(columns) {
    return columns.reduce((acc,x)=>acc+x.width,0);
}
