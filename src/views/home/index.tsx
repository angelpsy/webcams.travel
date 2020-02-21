import * as React from "react";
import Map from "../../container-components/map";
import WebCams from "../../container-components/web-cams";
import cx from "classnames";

import BaseButtonRound from "../../ui/button-round";
import IconDoubleArrow from "../../icons/double-arrow";

import "./index.css";

interface State {
    isOpenColLeft: boolean;
    isOpenColRight: boolean;
}

class HomeView extends React.Component<{}, State> {
    state: State = {
        isOpenColLeft: true,
        isOpenColRight: true,
    };

    onToggleColLeft = (): void => {
        this.setState(state => ({
            isOpenColLeft: !state.isOpenColLeft,
        }))
    };

    onToggleColRight = (): void => {
        this.setState(state => ({
            isOpenColRight: !state.isOpenColRight,
        }))
    };

    render() {
        const {isOpenColLeft, isOpenColRight} = this.state;
        return (
            <div className={"p-home"}>
                <aside className={cx("p-home__col-left", {
                    "p-home__col-left--closed": !isOpenColLeft
                })}>
                    <BaseButtonRound
                        className={cx("p-home__action", {
                            "p-home__action---to-close": isOpenColLeft
                        })}
                        onClick={this.onToggleColLeft}
                        type={"button"}
                    >
                        <IconDoubleArrow className={cx("p-home__action-icon", {
                            "p-home__action-icon---to-close": isOpenColLeft
                        })}/>
                    </BaseButtonRound>
                    <WebCams className={"p-home__web-cams"}/>
                </aside>
                <Map className={"p-home__map"}/>
            </div>
        );
    }
}

export {HomeView};
export default HomeView;
