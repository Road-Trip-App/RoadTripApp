import React from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import { Link } from 'react-router-dom';
import './TripCard.css'

export function NewTrip() {
  return (
    <>
      <Card className="text-center btnstyle">
        <Card.Header>1-From ORIGIN to DESTINATION</Card.Header>
        <Card.Body>
          <Card.Title>Some words</Card.Title>
          <Card.Text>
            LOOK A TRIP
          </Card.Text>
          <Link to="/existing-trip">
            <Button className="go-btn" variant="primary">Go!</Button>

          </Link>
          <Link to="/way-point">
            <Button className="edit-btn" variant="secondary">Add another Pin</Button>
          </Link>
        </Card.Body>
        <Card.Footer className="text-muted">Approx 14 hours</Card.Footer>
      </Card>

      <Card className="text-center btnstyle">
        <Card.Header> 2- From ORIGIN to DESTINATION</Card.Header>
        <Card.Body>
          <Card.Title>Some words</Card.Title>
          <Card.Text>
            LOOK A TRIP
          </Card.Text>
          <Link to="/existing-trip">
            <Button className="go-btn" variant="primary">Go!</Button>

          </Link>
          <Link to="/way-point">
            <Button className="edit-btn" variant="secondary">Add another Pin</Button>
          </Link>
        </Card.Body>
        <Card.Footer className="text-muted">Approx 14 hours</Card.Footer>
      </Card>

      <Card className="text-center btnstyle cardstyle">
        <Card.Header> 3- From ORIGIN to DESTINATION</Card.Header>
        <Card.Body>
          <Card.Title>Some words</Card.Title>
          <Card.Text>
            LOOK A TRIP
          </Card.Text>
          <Link to="/existing-trip">
            <Button className="go-btn" variant="primary">Go!</Button>

          </Link>
          <Link to="/way-point">
            <Button className="edit-btn" variant="secondary">Add another Pin</Button>
          </Link>
        </Card.Body>
        <Card.Footer className="text-muted">Approx 14 hours</Card.Footer>
      </Card>
    </>
  );
}

export default NewTrip;
