import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserRegistrationPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    location: "",
    language: "English",
    role: "Farmer",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later: send this to backend
    console.log("User Registered:", formData);

    // For now: redirect based on role
    if (formData.role === "Farmer") {
      navigate("/dashboard");
    } else {
      navigate("/dashboard"); // buyer dashboard later
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          User Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-semibold">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block font-semibold">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              required
              pattern="[0-9]{10}"
              placeholder="10-digit number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-semibold">
              Location (Village / District)
            </label>
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Preferred Language */}
          <div>
            <label className="block font-semibold">
              Preferred Language
            </label>
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="English">English</option>
              <option value="Tamil">Tamil</option>
            </select>
          </div>

          {/* Role */}
          <div>
            <label className="block font-semibold">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="Farmer">Farmer</option>
              <option value="Buyer">Buyer</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700"
          >
            Register & Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegistrationPage;
