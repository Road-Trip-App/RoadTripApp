import React from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import "./NewPinBtn.css"
import { Link } from 'react-router-dom';
import WaypointForm  from '../WaypointForm/WaypointForm';

export function NewPinBtn() {
  return(
    
  <Card className="d-flex justify-content-center bg-info">
  <Card.Body className=".bg-info">
    <Link to="/way-point">
    <Button  onclick={WaypointForm} className="NewPinBtn" variant="primary">Add a Pin</Button>
    </Link>
  </Card.Body>
</Card>


);
}

export default NewPinBtn;
