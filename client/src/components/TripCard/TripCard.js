import React from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';

export function NewTrip() {
  return (
<Card className="text-center">
  <Card.Header>From ORIGIN to DESTINATION</Card.Header>
  <Card.Body>
    <Card.Title>Some words</Card.Title>
    <Card.Text>
      LOOK A TRIP
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">Approx 14 hours</Card.Footer>
</Card>

);
}

export default NewTrip;
