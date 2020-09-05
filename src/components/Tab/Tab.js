import React, { useState, useEffect } from "react";
import _ from "lodash";
import cls from "clsx";

export class TabItem { }
TabItem.displayName = "TabItem";

export default function Tab(props) {
    const [active, setActive] = useState(props.active)
    const children = _.filter(_.castArray(props.children), o => {
        return React.isValidElement(o) && o.type.displayName === "TabItem";
    });

    function handleClick(index) {
        setActive(index);
        if (props.onChange) props.onChange(index)
    }

    useEffect(() => {
        if (_.isInteger(props.active) && props.active !== active) setActive(props.active);
    }, [props.active])

    if (children.length === 0)
        console.warn("Tab需要至少一个TabItem");

    const current = Math.min(active, children.length - 1);

    return <div className={cls("y-tab", props.className)} style={props.style}>
        <div className="y-tab-header">
            {_.map(children, (o, i) => {
                const { header } = o.props;
                return <div key={i} className={cls("y-tab-header-item", { active: current === i })} onClick={() => handleClick(i)}>
                    {header}
                </div>
            })}
        </div>
        <div className="y-tab-container">
            {_.map(children, (o, i) => {
                const { children } = o.props;
                return <div key={i} className={cls("y-tab-container-item", { active: current === i })}>
                    {children}
                </div>
            })}
        </div>
    </div>
}

Tab.defaultProps = {
    active: 0
}
Tab.displayName = "Tab";
