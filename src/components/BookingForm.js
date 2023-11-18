// BookingForm.js

import React, { useState } from 'react';
import Main from './Main';

function BookingForm(props) {
  

  

  // State variables
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState('');

  // Event handlers
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleNumberOfGuestsChange = (event) => {
    setNumberOfGuests(parseInt(event.target.value, 10));
  };

  const handleOccasionChange = (event) => {
    setSelectedOccasion(event.target.value);
  };

  return (
    <>
      <h1>Welcome to the booking page</h1>
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={selectedDate}
          onChange={handleDateChange}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={selectedTime}
          onChange={handleTimeChange}
        >
          {props.availableTimes.map((time, index) => (
            <option key={index}>{time}</option>
          ))}

        </select>
        {console.log(props.availableTimes)}
        

        <label htmlFor="guests">Number of guests</label>
        <input
          type="range"
          min="1"
          max="10"
          id="guests"
          value={numberOfGuests}
          onChange={handleNumberOfGuestsChange}
        />
        <span>{numberOfGuests}</span>

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={selectedOccasion}
          onChange={handleOccasionChange}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" />
      </form>
      

    </>
  );
}

export default BookingForm;
