import React from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import "./NewTripBtn.css"
import { Link } from 'react-router-dom';
import NewTripForm from '../NewTripForm/NewTripForm';

export function NewTripBtn() {
  return (
<Card className="text-center background">
  <Card.Body>
    <Button className="startBtn"variant="primary">START A NEW TRIP!</Button>

    <Link to="/banana">
    <Button onclick={NewTripForm} variant="primary">Go somewhere</Button>
              </Link>
  </Card.Body>
</Card>

);
}

export default NewTripBtn;
