import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css"; // Adjust path if index.css is elsewhere

const UserRegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    language: "ENG",
    role: "Farmer",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple phone validation
    if (!/^\d{10}$/.test(formData.phone)) {
      setMessage("Phone number must be 10 digits.");
      return;
    }

    // Log registration (replace with backend API later)
    console.log("Registration Data:", formData);

    setMessage("Registration successful!");

    // Redirect to Farmer Dashboard after 1 second
    setTimeout(() => {
      navigate("/farmer/dashboard");
    }, 1000);
  };

  return (
    <div className="registration-container">
      <h2>👤 User Registration</h2>
      <p className="subtitle">Please complete your profile before using the platform</p>

      <form onSubmit={handleSubmit}>
        <label>
          Name *
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Phone Number *
          <input
            type="tel"
            name="phone"
            placeholder="10-digit mobile number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Location *
          <input
            type="text"
            name="location"
            placeholder="Village / District / State"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Preferred Language *
          <select name="language" value={formData.language} onChange={handleChange} required>
            <option value="ENG">English</option>
            <option value="TAMIL">Tamil</option>
          </select>
        </label>

        <label>
          Role *
          <select name="role" value={formData.role} onChange={handleChange} required>
            <option value="Farmer">Farmer</option>
            <option value="Buyer">Buyer</option>
          </select>
        </label>

        <button type="submit">Register</button>
      </form>

      {message && <p className="info-text">{message}</p>}
    </div>
  );
};

export default UserRegistrationForm;