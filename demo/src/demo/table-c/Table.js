import React, {Component} from 'react';
import {getDerivedStateFromProps} from "./getDerivedStateFromProps";

class Table extends Component {
    static getDerivedStateFromProps = getDerivedStateFromProps;

    constructor(props) {
        super(props);

        this.state = {
            ...getDerivedStateFromProps(props, null),
            hasScroll: true,
            needRenderLock: true,
            offsetY: 0,
            maxRenderHeight: Number(window.innerHeight),
            offsetX: 0,
            maxRenderWidth: window.innerWidth,
        }
    }

    render() {
        const { dataSource, className, style, hasHeader, useOuterBorder, isLoading, isStickyHead } = this.props;

        const styleWrapper = (node)=>{

        };

        return (<div>

        </div>);
    }
}

export default Table;
