import {useEffect,useRef,useCallback} from 'react';

export function useOnClickOutside(ref, handler) {
    useEffect(() => {
            const listener = event => {
                if (!ref.current || ref.current.contains(event.target)) return;
                handler(event);
            };

            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);

            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            };
        },
        [ref, handler]
    );
}

export function useExactHeight() {
    const exactContainerRef = useRef();
    const containerRef = useRef();

    const updateHeight = useCallback((expanded) => {
        if(expanded && exactContainerRef.current && containerRef.current){
            if(isInit()) exactContainerRef.current.style.height='auto';//初始化时必须将高度设置为`auto`，否则父级将不能响应子级的高度变化
            else exactContainerRef.current.style.height = `${containerRef.current.offsetHeight}px`;
        }else{
            if(exactContainerRef.current){
                if(isInit()) exactContainerRef.current.style.height = '0px';//用于解决初始化页面闪烁的问题
                else setTimeout(()=>exactContainerRef.current.style.height = '0px',0)
            }
        }

        return ()=>{
            if (expanded && exactContainerRef.current && containerRef.current) {
                exactContainerRef.current.style.height = `${containerRef.current.offsetHeight}px`;
            }
        }

        function isInit() {
            return exactContainerRef.current.style.height==='';
        }
    }, [])

    return [exactContainerRef,containerRef,updateHeight]
}
