import React from 'react';
import moment from 'moment';

export default function EventList({ events, delEvent }) {
  return (
    <div>
      {events.map((event, idx) => {
        let backgroungClass;
        const _date = moment(event.date, 'MM/DD/YYYY');
        if (moment().diff(_date, 'days') === 0) {
          backgroungClass = 'card w-100 today';
        } else if (moment().diff(_date, 'days') > 0) {
          backgroungClass = 'card w-100 past';
        } else {
          backgroungClass = 'card w-100 future';
        }
        return (
          <div
            key={idx}
            style={event.delete ? { display: 'none' } : { display: '' }}
            className={backgroungClass}
          >
            <div className="card-body">
              <h5 className="card-title">{event.title}</h5>
              <p className="card-text">on {event.date}</p>
              <button
                onClick={() => delEvent(event)}
                className="btn btn-secondary btn-sm btn-block"
              >
                X
              </button>
              <p className="card-text">{event.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
