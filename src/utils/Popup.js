import React, {useState, useMemo} from 'react';
import {usePopper} from 'react-popper';
import clsx from "clsx";

const POPUP_OPTION = {
    strategy: "fixed",
    placement: "bottom-start",
    modifiers: [
        {
            name: "offset",
            options: {
                offset: [0, 4]
            }
        }
    ]
};

function Popup(props) {
    const {className} = props;
    const [popup, setPopup] = useState(null);
    const {styles, attributes} = usePopper(props.owner, popup, POPUP_OPTION);
    const minWidth = useMemo(() => {
        if (props.owner && props.widthable && props.owner.clientWidth > props.minWidth)
            return props.owner.clientWidth;
        return props.minWidth;
    }, [props.owner]);

    function handleMouseDown(e) {
        // console.log(e.button);
        if (e.button !== 0) return;
        e.preventDefault();
        if (props.owner) props.owner.focus();
    }

    return <div className={clsx("y-popup",className)} onMouseDown={handleMouseDown} ref={setPopup}
                style={{...styles.popper, minWidth: minWidth}} {...attributes.popper}>
        {props.children}
        <style jsx>{`
            div.y-popup{
                position: relative;
                // border:1px solid #D5D5D5;
                border-radius: 4px;
                background-color: "white";
                // box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.25);
                z-index: 100;
                cursor: default;
                // overflow: hidden;
            }
            div.y-popup[data-popper-reference-hidden="true"]{
                visibility: hidden;
                pointer-events: none;
            }
            `}</style>
    </div>
}

Popup.defaultProps = {
    widthable: false,
    minWidth: 100,
}

export default Popup;
