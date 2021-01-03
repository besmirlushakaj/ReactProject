import React from 'react';
import { Card, CardImg, CardText, CardBody, CardHeader, CardFooter, Button } from 'reactstrap';

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
