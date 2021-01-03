import React from 'react';
import { RenderCardHomeComponent } from "./CardComponent";
import { CardGroup } from 'reactstrap';


function Home({ cards }) {
    return (
        <div className="container">
            <div className="row">
                <CardGroup>
                    {cards.map(card => {
                        return (
                            <div className="col-lg-4 d-flex align-items-stretch my-3" key={card.id} id={card.id}>
                                <RenderCardHomeComponent item={card} />
                            </div>
                        );
                    })
                    }
                </CardGroup>
            </div>
        </div>
    );
}

export default Home;  