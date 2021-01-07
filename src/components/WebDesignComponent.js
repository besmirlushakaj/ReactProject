import React from 'react';
import { RenderMediaWebDesignComponent } from "./MediaComponent";
import { Media } from 'reactstrap';

function WebDesign({ media }) {
    const mediaList = media.map(itemMedia => {
        return (
            <Media tag="li" key={itemMedia.id}>
                <RenderMediaWebDesignComponent item={itemMedia} />
            </Media>
        );
    });

    return (

        <Media list>
            {mediaList}
        </Media>

    );
}

export default WebDesign; 