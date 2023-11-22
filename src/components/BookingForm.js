// BookingForm.js

import React from 'react';


function BookingForm(props) {
  
  console.log(props);
  return (
    <>
      <h1>Welcome to the booking page</h1>
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={props.selectedDate}
          onChange={props.handleDateChange}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={props.selectedTime}
          onChange={props.handleTimeChange}
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
          value={props.numberOfGuests}
          onChange={props.handleNumberOfGuestsChange}
        />
        <span>{props.numberOfGuests}</span>
        

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={props.selectedOccasion}
          onChange={props.handleOccasionChange}
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