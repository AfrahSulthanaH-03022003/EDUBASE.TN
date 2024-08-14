import React, { useState } from 'react';
import './UpdateEventsPage.css';

const UpdateEventsPage = () => {
    const [events, setEvents] = useState([
        { id: 1, name: 'Annual Sports Day', date: '2024-08-25', venue: 'Main Ground' },
        // { id: 2, name: 'Science Exhibition', date: '2024-09-10', venue: 'Auditorium' },
        // { id: 3, name: 'Music Festival', date: '2024-09-30', venue: 'Open Stage' },
    ]);

    const handleInputChange = (e, id, field) => {
        const updatedEvents = events.map(event => 
            event.id === id ? { ...event, [field]: e.target.value } : event
        );
        setEvents(updatedEvents);
    };

    const handleUpdateClick = () => {
        console.log('Updated Events:', events);
        // Handle the event update logic here
    };

    return (
        <div className="update-events-container">
            <h2 className="update-events-title">Update Events</h2>
            <div className="events-card-container">
                {events.map(event => (
                    <div key={event.id} className="event-card">
                        <div className="event-field">
                            <label className="event-label">Event Name:</label>
                            <input 
                                type="text" 
                                value={event.name} 
                                onChange={(e) => handleInputChange(e, event.id, 'name')}
                                className="event-input"
                            />
                        </div>
                        <div className="event-field">
                            <label className="event-label">Date:</label>
                            <input 
                                type="date" 
                                value={event.date} 
                                onChange={(e) => handleInputChange(e, event.id, 'date')}
                                className="event-input"
                            />
                        </div>
                        <div className="event-field">
                            <label className="event-label">Venue:</label>
                            <input 
                                type="text" 
                                value={event.venue} 
                                onChange={(e) => handleInputChange(e, event.id, 'venue')}
                                className="event-input"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <button className="update-events-button" onClick={handleUpdateClick}>
                Update Events
            </button>
        </div>
    );
};

export default UpdateEventsPage;
