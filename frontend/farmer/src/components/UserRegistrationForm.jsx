import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserRegistrationForm.css";

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

    // Phone validation
    if (!/^\d{10}$/.test(formData.phone)) {
      setMessage("Phone number must be 10 digits.");
      return;
    }

    // Placeholder for backend call
    console.log("Registration Data:", formData);

    
    setMessage("Registration successful!");
    
    setTimeout(() => {
      navigate("/dashboard"); // Redirect to dashboard
    }, 1200);
  };

  return (
    <div className="registration-container">
      <h2>👤 User Registration</h2>
      <p className="subtitle">
        Please complete your profile before using the platform
      </p>

      <form onSubmit={handleSubmit} className="registration-form">
        <label>
          Name *
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Phone Number *
          <input
            type="tel"
            name="phone"
            required
            pattern="[0-9]{10}"
            placeholder="10-digit mobile number"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Location *
          <input
            type="text"
            name="location"
            required
            placeholder="Village / District / State"
            value={formData.location}
            onChange={handleChange}
          />
        </label>

        <label>
          Preferred Language *
          <select
            name="language"
            required
            value={formData.language}
            onChange={handleChange}
          >
            <option value="ENG">English</option>
            <option value="TAMIL">Tamil</option>
          </select>
        </label>

        <label>
          Role *
          <select
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
          >
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
