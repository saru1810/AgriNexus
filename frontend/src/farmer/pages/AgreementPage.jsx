import React from "react";
import { useNavigate } from "react-router-dom";
import AgreementForm from "../components/AgreementForm";

const AgreementPage = () => {
  const navigate = useNavigate();

  // Get selected demand from localStorage (set in BuyerDemandPage)
  const selectedDemand = JSON.parse(
    window.localStorage.getItem("selectedDemand")
  );

  return (
    <div className="min-h-screen bg-green-50 p-4">
      {/* Header */}
      <div className="flex items-center justify-between bg-white p-5 rounded shadow mb-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold">Farmer – Buyer Agreement</h1>
        
      </div>

      {/* Agreement Form */}
      <div className="max-w-3xl mx-auto">
        {selectedDemand ? (
          <AgreementForm agreementData={selectedDemand} />
        ) : (
          <p className="text-center text-gray-600">
            No demand selected. Please go back and select a buyer demand.
          </p>
        )}
      </div>
    </div>
  );
};

export default AgreementPage;

