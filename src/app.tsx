import * as React from "react";
import {Location} from "history";
import {connect} from "react-redux";
import {Dispatch, Action} from "redux";
import { hot } from "react-hot-loader/root";
import {
    Switch,
    Route,
} from "react-router-dom";
import {initActionCreator} from "./store/actions";
import {RootState, Status} from "./store/types";

const {lazy, Suspense} = React;
const HomePage = lazy(() =>
    import(/* webpackChunkName: "home-page" */"./containers/home"));

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
            <div className={"app"}>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <Switch>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </Suspense>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState): StateProps => {
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
