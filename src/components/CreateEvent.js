import React, { useState } from 'react';
import moment from 'moment';

export default function CreateEvent({ events, setEvents }) {
  const [text, setText] = useState({
    date: moment().format('MM/DD/YYYY'),
    title: '',
    content: '',
    delete: false,
  });

  const onChange = e => {
    const change = {};
    change[e.target.name] = e.target.value;
    setText({ ...text, ...change });
  };

  const onSubmit = e => {
    e.preventDefault();

    text.date = moment(text.date, 'dddd MM/DD/YYYY').format('dddd MM/DD/YYYY');

    setEvents([...events, text]);
    setText({
      date: moment().format('MM/DD/YYYY'),

      title: '',
      content: '',
      delete: false,
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          name="date"
          value={text.date}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="date"
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <input
          name="title"
          value={text.title}
          className="form-control"
          placeholder="Title"
          onChange={onChange}
        />
        {text.title}
      </div>
      <div className="form-group">
        <textarea
          name="content"
          value={text.content}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Content"
          onChange={onChange}
        ></textarea>
      </div>
      <button
        disabled={!text.title}
        className="btn btn-secondary btn-lg btn-block"
      >
        Save
      </button>
    </form>
  );
}
