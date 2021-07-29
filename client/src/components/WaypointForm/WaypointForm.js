import React, { useState } from 'react';


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
        <div>
            <form>
            <input
            value={stopName}
            name="stopName"
            onChange={handleFormChange}
            type="text"
            placeholder="Stop Name"
            />
            {/* not sure but depending on what data the api has we may not 
            need this field */}
            <input
            value={location}
            name="location"
            onChange={handleFormChange}
            type="text"
            placeholder="Address?"
            />
            {/* Might switch duration to a drop down */}
            <input
            value={duration}
            name="duration"
            onChange={handleFormChange}
            type="text"
            placeholder="Duration"
            />
            <textarea 
            value={comment}
            name="comment"
            onChange={handleFormChange}
            type="text"
            placeholder="Add more information like restrooms or parking availability"
            />
            {error && (
                <p>{error}</p>
            )}
            <button type="button" onClick={handleFormSubmit}>Add Stop</button>
            </form>
        </div>
    )
}