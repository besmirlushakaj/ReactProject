import React from 'react';
import { Card, CardImg, CardText, CardBody, CardHeader, CardFooter, Button } from 'reactstrap';
import { Media } from 'reactstrap';

export function RenderCardHomeComponent({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} height="190" />
            <CardHeader tag="h5">{item.name}</CardHeader>
            <CardBody>
                <CardText>{item.description}</CardText>
            </CardBody>
            <CardFooter>
                <Button className="btn-success">{item.buttonContent}</Button>
            </CardFooter>
        </Card>
    );
}

export function RenderCardWebDevelopmentComponent({ item }) {
    return (
        <Media>
            <Media left href="#">
                <Media object src={item.image} alt="Generic placeholder image" />
            </Media>
            <Media body>
                <Media heading>
                    Media heading
            </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
        </Media>

    );
}

