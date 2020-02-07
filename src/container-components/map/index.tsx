import * as React from "react";
import BMap from "../../components/map";
import {GoogleMapChangeRequest} from "../../types/map";
import {connect} from "react-redux";
import {Location} from "history";
import {RootState as RootState} from "../../store/types";
import {Coordinates, Zoom} from "../../types/map";
import {getCoordinates, getZoom} from "../../store/modules/map/selectors";
import {Action, Dispatch, AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {
    initActionCreator,
    changeCoordinatesActionCreator,
    changeZoomActionCreator,
} from "../../store/modules/map/actions";

type StateProps = {
    location: Location;
    coordinates: Coordinates;
    zoom: Zoom;
}

interface DispatchProps {
    init: () => void;
    onChangeZoom: (zoom: Zoom) => void;
    onChangeCoordinates: (coordinates: Coordinates) => void;
}

type Props = StateProps & DispatchProps & {
    className?: string;
};

class ContainerMap extends React.Component<Props, null> {
    componentDidMount(): void {
        this.props.init();
    }

    onChange = (props: GoogleMapChangeRequest): void => {
        if (props.zoom !== this.props.zoom) {
            this.props.onChangeZoom(props.zoom);
        }
        if (props.center.lat !== this.props.coordinates.lat || props.center.lng !== this.props.coordinates.lng) {
            this.props.onChangeCoordinates({lng: props.center.lng, lat: props.center.lat});
        }
    };

    render() {
        return (
            <BMap {...this.props}
                  onChange={this.onChange}
            />
        );
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>): DispatchProps => {
    return {
        init: (): Action => dispatch(initActionCreator()),
        onChangeCoordinates: (coordinates): Action => dispatch(changeCoordinatesActionCreator(coordinates)),
        onChangeZoom: (zoom): Action => dispatch(changeZoomActionCreator(zoom))
    };
};

const mapStateToProps = (state: RootState): StateProps => {
    return {
        location: state.router.location,
        coordinates: getCoordinates(state),
        zoom: getZoom(state),
    };
};

export {ContainerMap};
export default connect<StateProps, DispatchProps>
(mapStateToProps, mapDispatchToProps)(ContainerMap);
