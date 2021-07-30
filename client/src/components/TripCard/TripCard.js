import React from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import "./TripCard.css";

export function NewTrip() {
  return (
<Card className="text-center btnstyle">
  <Card.Header>From ORIGIN to DESTINATION</Card.Header>
  <Card.Body>
    <Card.Title>Some words</Card.Title>
    <Card.Text>
      LOOK A TRIP
    </Card.Text>
    <Button className="go-btn" variant="primary">GO!</Button>
    <Button className="edit-btn"variant="primary">EDIT</Button>
  </Card.Body>
  <Card.Footer className="text-muted">Approx 14 hours</Card.Footer>
</Card>

);
}

export default NewTrip;
