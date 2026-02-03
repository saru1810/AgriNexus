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

    // Navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-center flex-grow">
            User Registration
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="ml-2 bg-gray-100 border border-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-200 transition"
          >
            ← Back
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Enter your full name"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block font-semibold mb-1">Mobile Number</label>
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
            <label className="block font-semibold mb-1">
              Location (Village / District)
            </label>
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="e.g., Salem, Tamil Nadu"
            />
          </div>

          {/* Preferred Language */}
          <div>
            <label className="block font-semibold mb-1">
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
            <label className="block font-semibold mb-1">Role</label>
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
            className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 transition"
          >
            Register & Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegistrationPage;
