import * as React from "react";
import cx from "classnames";
import {Icon} from "../type";

import "./index.css";

const DoubleArrow: Icon = (
    {
        children,
        className,
        ...props
    }) => {
    return (
        // @ts-ignore // fix error with React.SVGProps<SVGElement>
        <svg
            {...props}
            className={cx(className, "i-double-arrow")}
            viewBox="0 0 26 26"
            height="26px"
            width="26px"
        >
            <g fill="currentColor" >
                <polygon points="2.049,0.58 -0.035,2.664 10.801,13.5 -0.035,24.336 2.049,26.42 14.969,13.5  "/>
                <polygon points="13.049,0.58 10.965,2.664 21.801,13.5 10.965,24.336 13.049,26.42 25.969,13.5  "/>
            </g>
        </svg>
    );
};

export default DoubleArrow;
