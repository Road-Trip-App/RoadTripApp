import React from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import { Link } from 'react-router-dom';

export function SingleTripView() {
    return (
        <>
            <Card className="text-center cardstyle">
                <Card.Header>From ORIGIN to DESTINATION</Card.Header>
                <Card.Body>
                    <Card.Title>Some words</Card.Title>
                    <Card.Text>
                        LOOK A TRIP
                    </Card.Text>
                    {/* <Link to="/"> */}
                    <Button className="go-btn" variant="primary">Go!</Button>

                    {/* </Link> */}
                    {/* <Link to="/way-point">
            <Button className="edit-btn" variant="secondary">Add another Pin</Button>
          </Link> */}
                </Card.Body>
                {/* <Card.Footer className="text-muted">Approx XX hours</Card.Footer> */}
            </Card>

            <Card className="text-center">
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

export default SingleTripView;
