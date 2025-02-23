import React, { useState } from 'react';
import './BookingForm.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    checkInDate: '',
    checkOutDate: '',
    guests: 1,
    roomType: 'single'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Details: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="form-container">
      <h1>Hotel Booking Form</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>


        <div className="form-group">
          <label htmlFor="name">Email:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
      
        

        <div className="form-group">
          <label htmlFor="checkInDate">Check-in Date:</label>
          <input 
            type="date" 
            id="checkInDate" 
            name="checkInDate" 
            value={formData.checkInDate} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="checkOutDate">Check-out Date:</label>
          <input 
            type="date" 
            id="checkOutDate" 
            name="checkOutDate" 
            value={formData.checkOutDate} 
            onChange={handleChange} 
            required 
          />
        </div>

       
        <div className="form-group">
          <label htmlFor="roomType">Room Type:</label>
          <select 
            id="roomType" 
            name="roomType" 
            value={formData.roomType} 
            onChange={handleChange}
          >
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="suite">Suite</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Book Now</button>
      </form>
    </div>
  );
}

export default App;
