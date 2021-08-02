import React from 'react';
import Image from 'react-bootstrap/Image'

export function Home() {
    return(
        
    <div className="homestyle">
        
        <p className="homestyle">Welcome to RoadTripPin! Where you can store your pins to make sure you don't miss a stop on your trip!
        </p>

<Image src="../assets/roadtripphoto.jpg" fluid />
</div>
    );
}

export default Home;