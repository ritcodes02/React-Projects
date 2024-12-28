import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookNowForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [price, setPrice] = useState(0); // Starting price, will be updated
  const [roomPrice, setRoomPrice] = useState(100); // Default price per day per person

  // Handle price change based on input values
  useEffect(() => {
    if (startDate && endDate) {
      const days = (new Date(endDate) - new Date(startDate)) / (1000 * 3600 * 24);
      const totalPrice = days * roomPrice * (adults + children * 0.5); // Adults full price, children 50% of the price
      setPrice(totalPrice);
    }
  }, [startDate, endDate, adults, children, roomPrice]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Details:\nTotal Price: $${price}\nStart Date: ${startDate}\nEnd Date: ${endDate}\nGuests: ${adults} Adults, ${children} Children`);
  };

  return (
    <div className="book-now-form">
      <h2>Book Your Stay</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="startDate">Start Date:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Select start date"
          dateFormat="MMMM d, yyyy"
        />

        <label htmlFor="endDate">End Date:</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          placeholderText="Select end date"
          dateFormat="MMMM d, yyyy"
          minDate={startDate}
        />

        <label htmlFor="adults">Adults:</label>
        <input
          type="number"
          id="adults"
          value={adults}
          onChange={(e) => setAdults(e.target.value)}
          min="1"
        />

        <label htmlFor="children">Children:</label>
        <input
          type="number"
          id="children"
          value={children}
          onChange={(e) => setChildren(e.target.value)}
          min="0"
        />

        <div className="price">
          <span>Total Price: ${price.toFixed(2)}</span>
        </div>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookNowForm;
