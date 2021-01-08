import React from 'react';
import { RenderCardHomeComponent } from "./CardComponent";
import { CardGroup } from 'reactstrap';
import RenderCarousel from "./CarouselComponent";


function Home({ cards,carousel }) {
    return (
        <React.Fragment>
            <RenderCarousel items={carousel}/>
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
        </React.Fragment>
    );
}

export default Home;  