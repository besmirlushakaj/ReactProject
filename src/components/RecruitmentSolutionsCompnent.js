import React from 'react';
import { RenderMediaRecruitmentSolutionsComponent } from "./MediaComponent";
import { Media } from 'reactstrap';

function RecruitmentSolutions ({ media }) {
    const mediaList = media.map(itemMedia => {
        return (
            <Media tag="li" key={itemMedia.id}>
                <RenderMediaRecruitmentSolutionsComponent item={itemMedia} />
            </Media>
        );
    });

    return (

        <Media list>
            {mediaList}
        </Media>

    );
}

export default RecruitmentSolutions; 