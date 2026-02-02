import React, { useState } from "react";

const AgreementPage = () => {
  const [agreement, setAgreement] = useState({
    cropName: "",
    quantity: "",
    deliveryDate: "",
    agreed: false,
  });

  const handleChange = (e) => {
    setAgreement({
      ...agreement,
      [e.target.name]: e.target.value,
    });
  };

  const handleAgree = () => {
    setAgreement({ ...agreement, agreed: true });
    alert("Agreement recorded successfully");
  };

  return (
    <div className="min-h-screen bg-green-50 p-4">
      <div className="bg-white p-5 rounded shadow max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-3">
          Farmer – Buyer Agreement
        </h1>

        <p className="text-gray-600 mb-4">
          This is not a legal contract. It is a coordination record between
          farmer and buyer.
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
            placeholder="Quantity (e.g. 10 quintals)"
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
            <p>
              I agree to supply <strong>{agreement.quantity}</strong> of{" "}
              <strong>{agreement.cropName}</strong> with a tentative delivery
              date of{" "}
              <strong>
                {new Date(agreement.deliveryDate).toLocaleDateString()}
              </strong>
              . This agreement is for coordination purposes only and is not a
              legally binding contract.
            </p>
          </div>
        )}

        {/* Agree Button */}
        <button
          onClick={handleAgree}
          disabled={
            !agreement.cropName ||
            !agreement.quantity ||
            !agreement.deliveryDate
          }
          className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 disabled:bg-gray-400"
        >
          I Agree
        </button>
      </div>
    </div>
  );
};

export default AgreementPage;
