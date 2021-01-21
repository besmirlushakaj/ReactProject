import React from 'react';
import { RenderMediaMarketingComponent } from "./MediaComponent";
import { Media } from 'reactstrap';

function Marketing({ media }) {
    const mediaList = media.map(itemMedia => {
        return (
            <Media tag="li" key={itemMedia.id}>
                <RenderMediaMarketingComponent item={itemMedia} />
            </Media>
        );
    });

    return (

        <Media list>
            {mediaList}
        </Media>

    );
}

export default Marketing; 