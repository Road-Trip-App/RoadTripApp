import React from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import "./NewTripBtn.css"

export function NewTripBtn() {
  return (
  <div className=".bg-info">
<Card className="d-flex justify-content-center bg-info">
  <Card.Body className=".bg-info">
    <Button className="startBtn"variant="primary">START A NEW TRIP!</Button>
  </Card.Body>
</Card>
</div>

);
}

export default NewTripBtn;
