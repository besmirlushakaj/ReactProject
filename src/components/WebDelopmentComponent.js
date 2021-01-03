import React from 'react';
import { RenderCardWebDevelopmentComponent } from "./CardComponent";
import { CardGroup } from 'reactstrap';


function WebDelopment({ cards }) {
    return (
        <div className="container">
            <div className="row">
                <CardGroup>
                    {cards.map(card => {
                        return (
                            <div className="col d-flex align-items-stretch my-3" key={card.id} id={card.id}>
                                <RenderCardWebDevelopmentComponent item={card} />
                            </div>
                        );
                    })
                    }
                </CardGroup>
            </div>
        </div>
    );
}

export default WebDelopment; 