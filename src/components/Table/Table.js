import React, {useRef, useState, useEffect} from 'react';
import _ from 'lodash';
import clsx from "clsx";

// function Tooltip(props) {
//     const {children,style,className} = props;
//     const tooltipRef = useRef();
//     const [tooltipBox,setTooltipBox] = useState(false);
//
//     useEffect(()=>{
//         const tooltip = tooltipRef.current;
//         const tooltipSW = tooltip.scrollWidth;
//         const tooltipParent = tooltip.parentElement;
//         if(tooltipParent && tooltipParent.clientWidth < tooltipSW){
//             setTooltipBox(true);
//         }else{
//             setTooltipBox(false);
//         }
//     },[]);
//
//     return <div ref={tooltipRef} style={style} className={clsx('y-tooltip',{tooltipBox},className)}>
//         <div className="y-tooltip-box">{children}</div>
//         {children}
//     </div>
// }

function Cell(props) {
    const {data, value,rowSpan} = props;
    const {width, align} = data;

    return <td className="y-table-cell" rowSpan={rowSpan}>
        <div className="y-table-cell-inner" style={{width, textAlign: align}}>
            {value}
        </div>
    </td>;
}

function Table(props) {
    const {columns, dataSource,className} = props;
    // const [hoverNode, setHoverNode] = useState();
    const headerRef = useRef();
    const InnerRef = useRef();
    const leftTableRef = useRef();

    const rowSpanData = getRowSpanData(columns,dataSource);
    const leftLockCount = getLeftLockCount(columns);
    const leftColumns = columns.slice(0, leftLockCount);
    const centerColumns = columns.slice(leftLockCount);
    const leftWidth = getLeftWidth(leftColumns);

    const scrollHandle = () => {
        headerRef.current.style.transform = `translateX(-${InnerRef.current.scrollLeft}px)`;
        leftTableRef.current.style.transform = `translateY(-${InnerRef.current.scrollTop}px)`;
    };

    return (<div className={clsx('y-table',className)}>
        <div className="y-table-inner" onScroll={scrollHandle} ref={InnerRef}>
            {leftRender(leftColumns)}
            {centerRender(centerColumns, leftWidth)}
        </div>
    </div>);

    function leftRender(columns) {
        return <div className="y-table-left-wrap">
            <table className="y-table-left">
                {headerRender({columns})}
                {contentRender({columns, isRef: leftTableRef, onWheel})}
            </table>
        </div>;
    }

    function centerRender(columns, leftWidth=0) {
        return <table className='y-table-center' style={{marginLeft: leftWidth}}>
            {headerRender({columns, isRef: headerRef, leftWidth:leftWidth})}
            {contentRender({columns,onWheel})}
        </table>
    }

    function contentRender(props) {
        const {columns, isRef} = props;
        return <tbody className="y-table-content" ref={isRef || undefined}>
            {
                _.map(dataSource, (d, i) => {
                    return <tr onWheel={onWheel}
                               className={clsx('y-table-row')}
                               //  className={clsx('y-table-row',{hover:hoverNode===d})}
                               //  onMouseOver={() => setHoverNode(d)}
                               //  onMouseOut={() => setHoverNode(null)}
                                data-index={i}
                                key={i}>
                        {
                            _.map(columns, (c, i2) => {
                                if(c.rowSpan){
                                    const item = rowSpanData.find(x=>x.index===i);
                                    if(item) return <Cell data={c} value={item.value} key={i2} rowSpan={item.count}/>;
                                    return null;
                                }

                                const code = c.code;
                                let value = _.isString(code) ? d[code] : null;
                                if (_.isFunction(c.render)) value = c.render(value, d, i);
                                return <Cell data={c} value={value} key={i2}/>
                            })
                        }
                    </tr>
                })
            }
        </tbody>;
    }

    function onWheel(e) {
        e.stopPropagation();
        let x = 0;
        const frame = 10;
        const deltaY = e.deltaY/frame;
        animation();

        let animationId = null;
        function animation() {
            x=x+1;
            InnerRef.current.scrollTop = InnerRef.current.scrollTop + deltaY;
            if(x>frame) return;
            animationId = requestAnimationFrame(animation);
        }
        cancelAnimationFrame(animationId);
    }
}

export default React.memo(Table);

function getLeftLockCount(columns) {
    let count = 0;
    for (const col of columns) {
        if (col.lock) {
            count++
        } else {
            break
        }
    }
    return count;
}

function getLeftWidth(columns) {
    return columns.reduce((acc, x) => acc + x.width, 0);
}

function headerRender(props) {
    const {columns, isRef = false, leftWidth = 0} = props;
    return <thead className="y-table-header" ref={isRef || undefined} style={{left: leftWidth}}>
        <tr className="y-table-row">
            {
                _.map(columns, (c, i) => {
                    return <Cell data={c} value={c.name} key={i}/>
                })
            }
        </tr>
    </thead>;
}

function getRowSpanData(columns,data) {
    // const rowSpanList = _.filter(columns,x=>x.rowSpan).map(x=>x.code);
    const code = _.get(_.find(columns,x=>x.rowSpan),'code');
    const res = [];
    _.forEach(data,(o,i)=>{
        let item = res.find(x=>x.value===o[code]);
        if(item){
            item.count++;
        }else{
            res.push({value:o[code],count:1,index:i})
        }
    });

    return res;
}