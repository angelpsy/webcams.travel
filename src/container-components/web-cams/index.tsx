import * as React from "react";
import {connect} from "react-redux";
import {Action, Dispatch, AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {RootState as RootState} from "../../store/types";
import {WebCamsItem} from "../../types/web-cams";
import {getWebCams} from "../../store/modules/web-cams/selectors";
import WebCamsList from "../../components/web-cams/list";

type StateProps = {
    webcams: WebCamsItem[];
}

type Props = StateProps & {
    className?: string;
};

class ContainerWebCams extends React.Component<Props, null> {

    render() {
        return (
            <WebCamsList
                className={this.props.className}
                items={this.props.webcams}
            />
        );
    }
}

const mapStateToProps = (state: RootState): StateProps => {
    return {
        webcams: getWebCams(state),
    };
};

export {ContainerWebCams};
export default connect<StateProps, null>
(mapStateToProps)(ContainerWebCams);
