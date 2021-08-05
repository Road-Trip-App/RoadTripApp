import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calandar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };
  return (
    <div className="d-flex justify-content-center">
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};

export default Calandar;
