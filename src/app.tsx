import * as React from "react";
import {Location} from "history";
import {connect} from "react-redux";
import {Dispatch, Action} from "redux";
import { hot } from "react-hot-loader/root";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import {initActionCreator} from "./store/action";
import {State, Status} from "./store/types";
import HomePage from "./containers/home";
import AboutPage from "./containers/about";

import "./index.css";

interface StateProps {
    status: Status;
    location: Location;
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
                <div>Location: {this.props.location.pathname}</div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state: State): StateProps => {
    return {
       status: state.app.status,
       location: state.router.location,
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
