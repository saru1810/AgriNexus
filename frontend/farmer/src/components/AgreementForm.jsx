import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { acceptAgreement } from "../api/farmerApi";

const AgreementForm = () => {
  const navigate = useNavigate();

  const [agreement, setAgreement] = useState({
    cropName: "",
    quantity: "",
    deliveryDate: "",
    agreed: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setAgreement({ ...agreement, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleAgree = async () => {
    if (!agreement.cropName || !agreement.quantity || !agreement.deliveryDate) {
      setError("Please fill all highlighted fields before agreeing.");
      return;
    }

    try {
      await acceptAgreement(agreement); // Send agreement to backend
      setAgreement({ ...agreement, agreed: true });
      setSuccess("Agreement recorded successfully.");
    } catch (err) {
      setError(err.message || "Error submitting agreement");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-50 border p-2 rounded hover:bg-gray-100 transition"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">
        Farmer–Buyer Agreement
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        I agree to supply{" "}
        <input
          type="text"
          name="cropName"
          value={agreement.cropName}
          onChange={handleChange}
          className="border-b-2 border-green-600 font-semibold text-green-700 px-1 outline-none"
          placeholder="Crop Name"
        />{" "}
        with an approximate quantity of{" "}
        <input
          type="number"
          name="quantity"
          value={agreement.quantity}
          onChange={handleChange}
          className="border-b-2 border-green-600 font-semibold text-green-700 px-1 outline-none w-24"
          placeholder="Quantity"
        />{" "}
        quintals, to be delivered on or around{" "}
        <input
          type="date"
          name="deliveryDate"
          value={agreement.deliveryDate}
          onChange={handleChange}
          className="border-b-2 border-green-600 font-semibold text-green-700 px-1 outline-none"
        />
        . This agreement is for coordination purposes only and is not a legal
        contract.
      </p>

      {error && <p className="text-red-600 mb-3 text-center">{error}</p>}
      {success && <p className="text-green-600 mb-3 text-center">{success}</p>}

      <button
        onClick={handleAgree}
        disabled={agreement.agreed}
        className={`w-full px-6 py-2 rounded font-semibold text-white transition ${
          agreement.agreed
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        I Agree
      </button>
    </div>
  );
};

export default AgreementForm;

