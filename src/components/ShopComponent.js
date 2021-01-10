import React from 'react';
import { RenderMediaShopComponent } from "./MediaComponent";
import { Media } from 'reactstrap';

function Shop({ media }) {
    const mediaList = media.map(itemMedia => {
        return (
            <Media tag="li" key={itemMedia.id}>
                <RenderMediaShopComponent item={itemMedia} />
            </Media>
        );
    });

    return (

        <Media list>
            {mediaList}
        </Media>

    );
}

export default Shop; 