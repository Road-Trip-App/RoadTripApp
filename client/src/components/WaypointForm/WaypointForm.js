import React, { useState } from 'react';
import "./WaypointForm.css";

export default function WayPointForm() {
    const [stopName, setStopName] = useState('');
    const [location, SetLocation] = useState('');
    const [duration, setDuration] = useState('');
    const [comment, setComment] = useState('');
    const [error, setError] = useState('')

    const handleFormChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'stopName') {
            setStopName(inputValue);
        } else if (inputType === 'location') {
            SetLocation(inputValue);
        } else if (inputType === 'duration') {
            setDuration(inputValue)
        } else {
            setComment(inputValue)
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (stopName.length === 0 ) {
            setError('Name is missing')
            return
        }
        if (location.length === 0 ) {
            setError('Location is missing')
            return
        }
        if (duration.length === 0 ) {
            setError('Duration is missing')
            return
        }

        setError('')
        setStopName('')
        SetLocation('')
        setDuration('')
        setComment('')

    }

    return (
        <div
               className="waypointstyle ">
            <form>
            <input
            value={stopName}
            name="stopName"
            onChange={handleFormChange}
            type="text"
            placeholder="Pin Name"
            className="textfield"
    
            />
            {/* not sure but depending on what data the api has we may not 
            need this field */}
            <input
            value={location}
            name="location"
            onChange={handleFormChange}
            type="text"
            placeholder="Address"
            className="textfield"
            />
            {/* Might switch duration to a drop down */}
            <input
            value={duration}
            name="duration"
            onChange={handleFormChange}
            type="text"
            placeholder="Duration"
            className="textfield"
            />
            <textarea 
            value={comment}
            name="comment"
            className="textfield"
            onChange={handleFormChange}
            type="text"
            placeholder="Add more information such as restrooms or parking availability"
            />
            {error && (
                <p>{error}</p>
            )}
            <button type="button" className="pinbtn" onClick={handleFormSubmit}>Add Pin</button>
            </form>
        </div>
    )
}