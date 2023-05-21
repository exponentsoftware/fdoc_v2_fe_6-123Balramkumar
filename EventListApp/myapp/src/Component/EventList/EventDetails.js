import React from 'react';
import { Link } from 'react-router-dom';

const EventDetails = ({ event }) => {
  return (
    <div>
      <h2>Event Details</h2>
      <h3>{event.title}</h3>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Location: {event.location}</p>
      <p>Description: {event.description}</p>
      <Link to="/events">Back to Event List</Link>
    </div>
  );
};

export default EventDetails;
