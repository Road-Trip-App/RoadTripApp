import React from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import { Link } from 'react-router-dom';

export function NewTrip() {
  return (
    <>
      <Card className="text-center btnstyle">
        <Card.Header>From ORIGIN to DESTINATION</Card.Header>
        <Card.Body>
          <Card.Title>Some words</Card.Title>
          <Card.Text>
            LOOK A TRIP
          </Card.Text>
          <Link to="/banana">
            <Button className="go-btn" variant="primary">Go!</Button>

          </Link>
          <Link to="/way-point">
            <Button className="edit-btn" variant="secondary">Add another Pin</Button>
          </Link>
        </Card.Body>
        <Card.Footer className="text-muted">Approx 14 hours</Card.Footer>
      </Card>

      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>You might like:</Card.Title>
          <Card.Text>
            This cool pin to go to Narnia.
          </Card.Text>
          <Button variant="primary">Add this pin</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </>
  );
}

export default NewTrip;
