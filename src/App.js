import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CreateEvent from './components/CreateEvent';
import EventList from './components/EventList';
import moment from 'moment';

function App() {
  const [date, setDate] = useState(moment().format('dddd MM/DD/YYYY'));
  const [events, setEvents] = useState([]);

  const delEvent = item => {
    item.delete = !item.delete;

    setEvents([...events]);
  };

  return (
    <div className="container">
      <h1>The Acme Event Site ({events.length} Events!)</h1>
      <h3>Welcome! Today is {date}</h3>
      <div className="container">
        <div className="row">
          <div className="col-sm border border-dark mr-3 p-3">
            <CreateEvent
              date={date}
              setDate={setDate}
              events={events}
              setEvents={setEvents}
              delEvent={delEvent}
            />
          </div>
          <div className="col-sm border border-dark ml-3 p-3">
            <EventList
              date={date}
              setDate={setDate}
              events={events}
              setEvents={setEvents}
              delEvent={delEvent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
