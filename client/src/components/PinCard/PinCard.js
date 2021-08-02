import React from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import { Link } from 'react-router-dom';
import'./PinCard.css'

export function PinCard() {
    return (
        <>
            <Card className="text-center card-style">
                <Card.Header>CONDITIONALLY RENDERED PIN CARD</Card.Header>
                <Card.Body>
                    <Card.Title>THIS PIN</Card.Title>
                    <Card.Text>
                        THESE ARE THE COMMENTS
                    </Card.Text>
                    {/* <Link to="/banana"> */}
                    <Button className="go-btn" variant="primary">Go!</Button>

                    {/* </Link> */}

                </Card.Body>
                {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
            </Card>
        </>
    );
}

export default PinCard;
