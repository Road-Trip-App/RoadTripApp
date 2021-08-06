import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './TripCard.css';

function TripCard() {
  return (
  
      <Card className="text-center btnstyle">
        <Card.Header>1-From ORIGIN to DESTINATION</Card.Header>
        <Card.Body>
          <Card.Title>Some words</Card.Title>
          <Card.Text>
            LOOK A TRIP
          </Card.Text>
          <Link to="/SingleTripView">
            <Button className="go-btn" variant="primary">View</Button>

          </Link>
          {/* <Link to="/way-point">
            <Button className="edit-btn" variant="secondary">Add another Pin</Button>
          </Link> */}
        </Card.Body>
        <Card.Footer className="text-muted">Approx 14 hours</Card.Footer>
      </Card>

  
  );
}

export default TripCard;
