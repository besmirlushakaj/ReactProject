import React from 'react';
import { RenderMediaAboutUsComponent } from "./MediaComponent";
import { Media } from 'reactstrap';

function AboutUs({ media }) {
    const mediaList = media.map(itemMedia => {
        return (
            <Media tag="li" key={itemMedia.id}>
                <RenderMediaAboutUsComponent item={itemMedia} />
            </Media>
        );
    });

    return (

        <Media list>
            {mediaList}
        </Media>

    );
}

export default AboutUs; 