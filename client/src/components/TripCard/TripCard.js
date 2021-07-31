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
    <Button variant="primary">Go somewhere</Button>
              </Link>
  </Card.Body>
  <Card.Footer className="text-muted">Approx 14 hours</Card.Footer>
</Card>

<Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
</>
);
}

export default NewTrip;
