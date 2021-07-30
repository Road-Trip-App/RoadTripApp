import React from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import "./NewTripBtn.css"

export function NewTripBtn() {
  return (
<Card className="text-center background">
  <Card.Body>
    <Button className="startBtn"variant="primary">START A NEW TRIP!</Button>
  </Card.Body>
</Card>

);
}

export default NewTripBtn;
