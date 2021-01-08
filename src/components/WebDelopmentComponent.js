import React from 'react';
import { RenderMediaWebDevelopmentComponent } from "./MediaComponent";
import { Media } from 'reactstrap';
import RenderCarousel from "./CarouselComponent";

function WebDelopment({ media, carousel }) {
    const mediaList = media.map(itemMedia => {
        return (
            <Media tag="li" key={itemMedia.id}>
                <RenderMediaWebDevelopmentComponent item={itemMedia} />
            </Media>
        );
    });

    return (

        <React.Fragment>
            <RenderCarousel items={carousel} />


            <Media list>
                {mediaList}
            </Media>
        </React.Fragment>

    );
}

export default WebDelopment; 