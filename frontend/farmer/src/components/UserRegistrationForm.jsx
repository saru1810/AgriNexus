import React, { useState } from 'react';

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    location: '',
    language: 'Tamil', // default
    role: 'Farmer',   // default for this branch
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  // Validation
  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.mobile) tempErrors.mobile = 'Mobile number is required';
    else if (!/^\d{10}$/.test(formData.mobile))
      tempErrors.mobile = 'Mobile number must be 10 digits';
    if (!formData.location) tempErrors.location = 'Location is required';
    if (!formData.language) tempErrors.language = 'Please select a language';
    if (!formData.role) tempErrors.role = 'Please select a role';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log('User Registered:', formData);
    setSuccessMessage('Registration successful! Redirecting to Dashboard...');

    // Reset form (optional)
    // setFormData({ name: '', mobile: '', location: '', language: 'Tamil', role: 'Farmer' });

    // Simulate redirect after 2 seconds
    setTimeout(() => {
      console.log('Redirecting to Farmer Dashboard...');
      // Here you can use navigate('/dashboard') if using react-router
      setSuccessMessage('');
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-md mx-auto bg-green-50 rounded shadow"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Farmer Registration</h2>

      {successMessage && (
        <p className="text-green-600 mb-4 text-center">{successMessage}</p>
      )}

      {/* Name */}
      <div className="mb-3">
        <label className="block mb-1 font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
      </div>

      {/* Mobile Number */}
      <div className="mb-3">
        <label className="block mb-1 font-semibold">Mobile Number</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          maxLength="10"
        />
        {errors.mobile && <p className="text-red-600 text-sm">{errors.mobile}</p>}
      </div>

      {/* Location */}
      <div className="mb-3">
        <label className="block mb-1 font-semibold">Location (Village/District)</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        {errors.location && (
          <p className="text-red-600 text-sm">{errors.location}</p>
        )}
      </div>

      {/* Language */}
      <div className="mb-3">
        <label className="block mb-1 font-semibold">Preferred Language</label>
        <select
          name="language"
          value={formData.language}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        >
          <option value="Tamil">Tamil</option>
          <option value="English">English</option>
        </select>
        {errors.language && (
          <p className="text-red-600 text-sm">{errors.language}</p>
        )}
      </div>

      {/* Role */}
      <div className="mb-3">
        <label className="block mb-1 font-semibold">Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        >
          <option value="Farmer">Farmer</option>
          <option value="Buyer">Buyer</option>
        </select>
        {errors.role && <p className="text-red-600 text-sm">{errors.role}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-green-500 text-white p-2 rounded font-semibold hover:bg-green-600 transition"
      >
        Register
      </button>
    </form>
  );
};

export default UserRegistrationForm;
