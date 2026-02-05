
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { acceptAgreement } from "../api/farmerApi";
import { generateAgreementPDF } from "../api/docGenerator";

const AgreementForm = ({ agreementData }) => {
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [agreementText, setAgreementText] = useState("");

  // Automatically generate agreement text based on agreementData
  useEffect(() => {
    if (agreementData) {
      const text = `
This Crop Supply and Failure Management Agreement is made on ${agreementData.date}, 
between Farmer ${agreementData.farmerName}, residing at ${agreementData.farmerAddress}, 
and Buyer ${agreementData.buyerName}, located at ${agreementData.buyerAddress}.

Under this agreement, the Farmer agrees to supply ${agreementData.quantity} kg of ${agreementData.crop} 
at a rate of ₹${agreementData.price} per kg, ensuring the produce meets the agreed quality and industry standards.

Deliveries will be made to the Buyer’s warehouse by ${agreementData.deliveryDate}, 
with payment due within ${agreementData.paymentTerms} days of delivery. 
In case of crop failure due to unforeseen circumstances such as drought, pest infestation, or disease, 
the Farmer shall notify the Buyer within 48 hours, 
and both parties will jointly assess the loss to determine compensation, replacement, or alternative arrangements.

The risk of loss remains with the Farmer until the crops are delivered to the Buyer. 
Any disputes arising from this agreement shall be resolved through mutual negotiation or arbitration 
under ${agreementData.jurisdiction} jurisdiction.
      `;
      setAgreementText(text);
    }
  }, [agreementData]);

  const handleSubmit = async () => {
    if (!agreed) {
      setMessage("You must agree to the terms before submitting.");
      return;
    }

    setLoading(true);
    setMessage("");
    try {
      const payload = { ...agreementData, terms: agreementText };
      await acceptAgreement(payload);
      setMessage("Agreement accepted successfully!");
      setTimeout(() => {
  navigate("/dashboard"); // Redirect to dashboard
}, 1200);
    } catch (err) {
      setMessage("Failed to submit agreement. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePreviewPDF = () => {
    const pdfUrl = generateAgreementPDF({ ...agreementData, terms: agreementText });
    window.open(pdfUrl, "_blank"); // preview in new tab
  };

  if (!agreementData) return <p>Loading agreement...</p>;

  return (
    <div className="agreement-form">
      <h2>Crop Supply and Failure Management Agreement</h2>
      <div className="agreement-text">
        <pre>{agreementText}</pre>
      </div>

      <div className="agreement-actions">
        <label>
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          I agree to the terms of this agreement
        </label>

        <div className="buttons">
          <button onClick={handlePreviewPDF} disabled={loading}>
            Preview PDF
          </button>
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? "Submitting..." : "Accept Agreement"}
          </button>
        </div>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default AgreementForm;
