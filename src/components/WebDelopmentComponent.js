import React from 'react';
import { RenderMediaWebDevelopmentComponent } from "./MediaComponent";
import { Media } from 'reactstrap';

function WebDelopment({ media }) {
    const mediaList = media.map(itemMedia => {
        return (
            <Media tag="li" key={itemMedia.id}>
                <RenderMediaWebDevelopmentComponent item={itemMedia} />
            </Media>
        );
    });

    return (

        <Media list>
            {mediaList}
        </Media>

    );
}

export default WebDelopment; 