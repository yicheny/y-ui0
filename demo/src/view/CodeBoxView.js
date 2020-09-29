import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useReducer,
    useCallback,
    useMemo,
    useContext,
    useRef,
    useDebugValue,
    useImperativeHandle
} from 'react';
import MarkdownContainer from "../component/MarkdownContainer";

const options = [
    {
        title: 'CodeBox',
        source: require('../../doc/CodeBox/基础用法.md'),
        dependencies: {
            useState,
            useEffect,
            useLayoutEffect,
            useReducer,
            useCallback,
            useMemo,
            useContext,
            useRef,
            useDebugValue,
            useImperativeHandle
        }
    },
]

function CodeBoxView(props) {
    return <MarkdownContainer options={ options }/>
}

export default CodeBoxView;
