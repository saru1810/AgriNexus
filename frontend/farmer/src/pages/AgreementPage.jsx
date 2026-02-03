import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AgreementPage = () => {
  const navigate = useNavigate();

  const [agreement, setAgreement] = useState({
    cropName: "",
    quantity: "",
    deliveryDate: "",
    agreed: false,
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setAgreement({
      ...agreement,
      [e.target.name]: e.target.value,
    });
  };

  const handleAgree = () => {
    if (!agreement.cropName || !agreement.quantity || !agreement.deliveryDate) return;

    setAgreement({ ...agreement, agreed: true });
    setSuccess("Agreement recorded successfully.");

    // Here you can call your API to save the agreement
    console.log("Agreement Submitted:", agreement);
  };

  return (
    <div className="min-h-screen bg-green-50 p-4">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between bg-white p-5 rounded shadow mb-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold">Farmer – Buyer Agreement</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-50 border px-3 py-1 rounded hover:bg-gray-100 transition"
        >
          ← Back
        </button>
      </div>

      <div className="bg-white p-5 rounded shadow max-w-2xl mx-auto">
        <p className="text-gray-600 mb-6">
          This is not a legal contract. It is a coordination record between farmer and buyer.
        </p>

        {/* Inputs */}
        <div className="space-y-3 mb-4">
          <input
            type="text"
            name="cropName"
            placeholder="Crop Name"
            value={agreement.cropName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="quantity"
            placeholder="Quantity (e.g., 10 quintals)"
            value={agreement.quantity}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="date"
            name="deliveryDate"
            value={agreement.deliveryDate}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Agreement Paragraph */}
        {agreement.cropName && agreement.quantity && agreement.deliveryDate && (
          <div className="border p-4 rounded bg-gray-50 mb-4">
            <p className="text-gray-700">
              I agree to supply <strong>{agreement.quantity}</strong> of{" "}
              <strong>{agreement.cropName}</strong> with a tentative delivery date of{" "}
              <strong>{new Date(agreement.deliveryDate).toLocaleDateString()}</strong>.
              This agreement is for coordination purposes only and is not legally binding.
            </p>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <p className="text-green-600 text-center mb-3">{success}</p>
        )}

        {/* Agree Button */}
        <button
          onClick={handleAgree}
          disabled={agreement.agreed}
          className={`w-full py-2 rounded font-semibold text-white transition ${
            agreement.agreed
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {agreement.agreed ? "Agreed" : "I Agree"}
        </button>
      </div>
    </div>
  );
};

export default AgreementPage;
