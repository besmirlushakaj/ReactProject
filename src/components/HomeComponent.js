import React from 'react';
import RenderCard from "./CardComponent";




function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.card} />

                </div>
                <div className="col-md m-1">

                </div>
                <div className="col-md m-1">

                </div>
            </div>
        </div>
    );
}

export default Home;  