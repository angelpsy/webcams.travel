import * as React from "react";
import {connect} from "react-redux";
import {Dispatch, Action} from "redux";
import { hot } from "react-hot-loader/root";
import {initActionCreator} from "./store/action";
import {State, Status} from "./store/types";

import "./index.css";

interface StateProps {
    status: Status;
}

interface DispatchProps {
    init: () => void;
}

type Props = StateProps & DispatchProps;

class App extends React.Component<Props, null> {
    componentDidMount(): void {
        this.props.init();
    }

    render() {
        return (
          <div>
              <h1>My react Apps</h1>
              <div>Status: {this.props.status}</div>
          </div>
        );
    }
}

const mapStateToProps = (state: State): StateProps => {
    return {
       status: state.root.status,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return {
        init: (): Action => dispatch(initActionCreator()),
    };
};


export {App};
export default hot(
    connect<StateProps, DispatchProps>
    (mapStateToProps, mapDispatchToProps)(App)
);
