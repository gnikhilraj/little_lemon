import React from "react";
import { useState } from "react";
import BookingForm from "./BookingForm";

function Main(){
  
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);
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


  return(
    <>
    <BookingForm
    availableTimes={availableTimes}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        numberOfGuests={numberOfGuests}
        setNumberOfGuests={setNumberOfGuests}
        selectedOccasion={selectedOccasion}
        setSelectedOccasion={setSelectedOccasion}
        handleDateChange={handleDateChange}
        handleTimeChange={handleTimeChange}
        handleNumberOfGuestsChange={handleNumberOfGuestsChange}
        handleOccasionChange={handleOccasionChange}
        />
      </>
  )
}

export default Main;