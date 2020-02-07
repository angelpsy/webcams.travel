import * as React from "react";
import Map from "../../container-components/map";

import "./index.css";

class HomeView extends React.Component {
    render() {
        return (
            <div className={"p-home"}>
                <Map className={"p-home__map"}/>
            </div>
        );
    }
}

export {HomeView};
export default HomeView;
