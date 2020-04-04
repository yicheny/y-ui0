import React,{Fragment} from 'react';
import clsx from "clsx";

function SvgIcon(props) {
    const {name, color, size,rotate,className, ...rest} = props;

    const cn = clsx(className,'y-svg-icon','rotate'.concat(rotate));
    return (<Fragment>
        {iconFor(name)}
    </Fragment>);

    function iconFor(name) {
        const nameMap = {
            arrowDown,
            arrowDown2
        };

        return nameMap[name] ? nameMap[name]() : null;

        function arrowDown() {
            return <svg {...rest} className={cn} height={size} width={size} fill={color} viewBox="0 0 1024 1024"><path d="M71.5 296.6c-4.7 4.7-4.7 12.3 0 17l432.1 432.1c4.7 4.7 12.3 4.7 17 0l431.9-431.8c4.7-4.7 4.7-12.3 0-17l-18.4-18.4c-4.7-4.7-12.3-4.7-17 0L520.6 675c-4.7 4.7-12.3 4.7-17 0L106.9 278.3c-4.7-4.7-12.3-4.7-17 0l-18.4 18.3z"/></svg>;
        }

        function arrowDown2() {
            return <svg {...rest} className={cn} height={size} width={size} fill={color} viewBox="0 0 1024 1024"><path d="M934.1 376.5c-4.7-4.7-12.3-4.7-17 0L520.6 773c-4.7 4.7-12.3 4.7-17 0L106.9 376.3c-4.7-4.7-12.3-4.7-17 0l-18.4 18.3c-4.7 4.7-4.7 12.3 0 17l432.1 432.1c4.7 4.7 12.3 4.7 17 0l431.9-431.8c4.7-4.7 4.7-12.3 0-17l-18.4-18.4z"/><path d="M503.6 647.7c4.7 4.7 12.3 4.7 17 0l431.9-431.8c4.7-4.7 4.7-12.3 0-17l-18.4-18.4c-4.7-4.7-12.3-4.7-17 0L520.6 577c-4.7 4.7-12.3 4.7-17 0L106.9 180.3c-4.7-4.7-12.3-4.7-17 0l-18.4 18.3c-4.7 4.7-4.7 12.3 0 17l432.1 432.1z"/></svg>
        }
    }
}
SvgIcon.defaultProps = {
    color: 'gray',
    size: 20
};

export default SvgIcon;

