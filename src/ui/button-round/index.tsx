import * as React from "react";
import cx from "classnames";
import {ButtonType} from "../../types/html-element";

import "./index.css";

interface Props extends React.HTMLProps<HTMLButtonElement> {
    type?: ButtonType;
}

const BaseButtonRound: React.FC<Props> = (
    {
        children,
        className,
        type= "button",
        ...props
    }) => {
    return (
        <button
            {...props}
            type={type}
            className={cx(className, "ui-button-round")}
        >
            {children}
        </button>
    );
};

export default BaseButtonRound;
