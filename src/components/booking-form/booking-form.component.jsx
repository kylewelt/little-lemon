import { useState } from "react";

import "./booking-form.styles.scss";

const BookingForm = ({ availableTimes, dateChanged, submitForm }) => {
  const defaultFormFields = {
    resDate: "",
    resTime: "",
    guests: 1,
    occasion: "Birthday",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { resDate, resTime, guests, occasion } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "resDate") {
      dateChanged(value);
    }

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      submitForm(formFields);
      resetFormFields();
    } catch (error) {
      console.log("booking encountered an error", error);
    }
  };

  return (
    <>
      <h3>Book Now</h3>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          name="resDate"
          type="date"
          id="res-date"
          value={resDate}
          onChange={handleChange}
          required
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          name="resTime"
          id="res-time"
          value={resTime}
          onChange={handleChange}
          required
        >
          {availableTimes.map((availableTime, index) => (
            <option key={index}>{availableTime}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          name="guests"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={handleChange}
          required
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          name="occasion"
          id="occasion"
          value={occasion}
          onChange={handleChange}
          required
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
};

export default BookingForm;
