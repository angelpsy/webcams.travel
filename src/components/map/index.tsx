import * as React from "react";
// @ts-ignore
import cx from "classnames";
import GoogleMapReact from "google-map-react";
import { Coordinates, GoogleMapChangeRequest } from "../../types/map";

interface State {
    isInitGoogleMap: boolean;
}

type StateProps = {
    className?: string;
    coordinates: Coordinates;
    zoom: number;
}

interface DispatchProps {
    init?: () => void;
    onChange: (props: GoogleMapChangeRequest) => void;
}

type Props = StateProps & DispatchProps;

const KEY_GOOGLE_MAPS = process.env.APP_KEY_GOOGLE_MAPS;

class BMap extends React.Component<Props, State> {
    readonly state = {
        isInitGoogleMap: false,
    };

    onChange = (props: GoogleMapChangeRequest): void => {
        // hook: disable handler of change when map is loading (first loading of map)
        // reason: https://github.com/google-map-react/google-map-react/blob/master/DOC.md#simple-example
        if (!this.state.isInitGoogleMap) return;
        this.props.onChange(props);
    };
    handleApiLoaded = (): void => {
        this.setState({
            isInitGoogleMap: true,
        })
    };
    render() {
        const { className } = this.props;
        if (!KEY_GOOGLE_MAPS) {
            return (
                <div className={cx("b-map", "b-map--not-found", className)}>
                    key not found
                </div>
            );
        }

        const {coordinates, zoom} = this.props;
        return (
            <div className={cx("b-map", className)}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: KEY_GOOGLE_MAPS }}
                    center={coordinates}
                    zoom={zoom}
                    onChange={this.onChange}
                    onGoogleApiLoaded={this.handleApiLoaded}
                ></GoogleMapReact>
            </div>
        );
    }
}

export {BMap};
export default BMap;
