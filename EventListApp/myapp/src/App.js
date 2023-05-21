import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import EventList from "./Component/EventList/EventList";
import Home from "./Component/Home/Home";
import EventDetails from "./Component/EventList/EventDetails";
import EventForm from "./Component/EventList/EventForm";

function App() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Event 1",
      date: "2023-05-21",
      time: "10:00 AM",
      location: "Location 1",
      description: "Description 1",
    },
    {
      id: 2,
      title: "Event 2",
      date: "2023-05-22",
      time: "2:00 PM",
      location: "Location 2",
      description: "Description 2",
    },
  ]);

  const addEvent = (newEvent) => {
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/events">
            <EventList events={events} />
          </Route>
          <Route
            path="/events/:id"
            render={({ match }) => (
              <EventDetails
                event={events.find(
                  (event) => event.id === parseInt(match.params.id)
                )}
              />
            )}
          />
          <Route path="/create-event">
            <EventForm addEvent={addEvent} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
