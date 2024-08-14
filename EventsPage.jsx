import React from 'react';
import './EventsPage.css';

const EventsPage = () => {
    // Example card data
    const events = [
        { id: 1, title: 'Sports Day', date: '2024-09-01', location: 'Stadium' },
        { id: 2, title: 'Music Festival', date: '2024-09-15', location: 'City Park' },
        { id: 3, title: 'Art Exhibition', date: '2024-10-01', location: 'Art Gallery' },
        { id: 4, title: 'Tech Conference', date: '2024-10-10', location: 'Convention Center' },
        { id: 5, title: 'Food Fair', date: '2024-11-01', location: 'Town Hall' },
    ];

    return (
        <div className="events-container">
            <h1 className="events-title">Events</h1>
            <div className="events-cards">
                {events.map(event => (
                    <div key={event.id} className="events-card">
                        <div className="events-card-content">
                            <h2 className="events-card-title">{event.title}</h2>
                            <p className="events-card-date">{event.date}</p>
                            <p className="events-card-location">{event.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsPage;
