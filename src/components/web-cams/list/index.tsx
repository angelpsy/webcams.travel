import * as React from "react";
import cx from "classnames";
import {WebCamsItem} from "../../../types/web-cams";

interface State {

}

type StateProps = {
    className?: string;
    items: WebCamsItem[];
}

interface DispatchProps {

}

type Props = StateProps & DispatchProps;

class WebCamsList extends React.Component<Props, State> {
    render() {
        const {
            items,
            className,
        } = this.props;
        return (
            <div className={cx(className, "b-web-cams-list")}>
                {items.map(item => {
                    return <div className={"b-web-cams-list__item"} key={item.id}>{item.title}</div>
                })}
            </div>
        );
    };
}

export default WebCamsList;

