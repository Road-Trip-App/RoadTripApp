import React from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import "./NewTripBtn.css"
import { Link } from 'react-router-dom';
import NewTripForm  from '../NewTripForm/NewTripForm';

export function NewTripBtn() {
  return(
    
  <Card className="d-flex justify-content-center bg-info">
  <Card.Body className=".bg-info">
    <Link to="/banana">
    <Button  onClick={NewTripForm} className="startBtn" variant="primary">START A NEW TRIP!</Button>
    </Link>
  </Card.Body>
</Card>


);
}

export default NewTripBtn;
