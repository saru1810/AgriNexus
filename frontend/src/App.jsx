import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Correct paths based on your structure
import DashboardPage from "./farmer/pages/DashboardPage";
import CropRegistrationPage from "./farmer/pages/CropRegistrationPage";
import CropStatusPage from "./farmer/pages/CropStatusPage";
import BuyerDemandPage from "./farmer/pages/BuyerDemandPage";
import AgreementPage from "./farmer/pages/AgreementPage";
import CompensationPage from "./farmer/pages/CompensationPage";
import FailureReportPage from "./farmer/pages/FailureReportPage";
import UserRegistrationPage from "./farmer/pages/UserRegistrationPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-green-50">
        <Routes>
          {/* Base entry */}
          <Route path="/" element={<UserRegistrationPage />} />

          {/* Farmer routes */}
          <Route path="/farmer/dashboard" element={<DashboardPage />} />
          <Route path="/farmer/crop-registration" element={<CropRegistrationPage />} />
          <Route path="/farmer/crop-status" element={<CropStatusPage />} />
          <Route path="/farmer/buyer-demands" element={<BuyerDemandPage />} />
          <Route path="/farmer/agreements" element={<AgreementPage />} />
          <Route path="/farmer/compensation" element={<CompensationPage />} />
          <Route path="/farmer/failure-report" element={<FailureReportPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
