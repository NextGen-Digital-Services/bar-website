import React, { useState } from 'react';
import { Calendar, Users, Clock, Smile, CheckCircle } from 'lucide-react';
import PremiumButton from '../shared/PremiumButton';
import './ReservationForm.css';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '19:00',
    occasion: 'Dinner',
    requests: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.date) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="reservation-success">
        <div className="success-icon-wrapper">
          <CheckCircle size={64} className="success-icon" />
        </div>
        <h3 className="success-title">Reservation Confirmed</h3>
        <p className="success-subtitle">
          Thank you, <strong>{formData.name}</strong>. Your royal table is reserved.
        </p>
        <div className="success-details-card">
          <div className="success-detail-row">
            <span className="success-label">Date & Time</span>
            <span className="success-value">{formData.date} at {formData.time}</span>
          </div>
          <div className="success-detail-row">
            <span className="success-label">Guests</span>
            <span className="success-value">{formData.guests} Guests</span>
          </div>
          <div className="success-detail-row">
            <span className="success-label">Occasion</span>
            <span className="success-value">{formData.occasion}</span>
          </div>
        </div>
        <p className="success-notice">
          A confirmation SMS and email have been sent to <strong>{formData.phone}</strong>. We look forward to hosting you.
        </p>
        <PremiumButton variant="solid" onClick={() => setSubmitted(false)}>
          Book Another Table
        </PremiumButton>
      </div>
    );
  }

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <div className="form-row">
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Alessandra Moretti"
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g., +91 75679 30426"
          />
        </div>
      </div>

      <div className="form-row">
        {/* Number of Guests */}
        <div className="form-group">
          <label htmlFor="guests">Number of Guests</label>
          <div className="select-wrapper">
            <Users size={16} className="select-icon" />
            <select id="guests" name="guests" value={formData.guests} onChange={handleChange}>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
              <option value="8">8 Guests (Large Group)</option>
              <option value="10">10+ Guests</option>
            </select>
          </div>
        </div>

        {/* Occasion */}
        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <div className="select-wrapper">
            <Smile size={16} className="select-icon" />
            <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
              <option value="Dinner">Dinner</option>
              <option value="Brunch">Sunday Brunch</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Birthday">Birthday Celebration</option>
              <option value="Corporate">Business Dining</option>
              <option value="Lounge">Lounge / Drinks Night</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form-row">
        {/* Date */}
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <div className="select-wrapper">
            <Calendar size={16} className="select-icon" />
            <input
              type="date"
              id="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Time */}
        <div className="form-group">
          <label htmlFor="time">Preferred Time</label>
          <div className="select-wrapper">
            <Clock size={16} className="select-icon" />
            <input
              type="time"
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Special Requests */}
      <div className="form-group">
        <label htmlFor="requests">Special Requests / Dietary Restrictions</label>
        <textarea
          id="requests"
          name="requests"
          value={formData.requests}
          onChange={handleChange}
          rows="4"
          placeholder="Please let us know if you require wheelchair accessibility, high chairs, or have allergies..."
        ></textarea>
      </div>

      <div className="form-submit">
        <PremiumButton type="submit" variant="solid" className="submit-btn">
          Confirm Reservation
        </PremiumButton>
      </div>
    </form>
  );
};

export default ReservationForm;
