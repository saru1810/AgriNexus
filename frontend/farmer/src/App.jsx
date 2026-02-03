import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import CropRegistrationPage from "./pages/CropRegistrationPage";
import CropStatusPage from "./pages/CropStatusPage";
import BuyerDemandPage from "./pages/BuyerDemandPage";
import AgreementPage from "./pages/AgreementPage";
import CompensationPage from "./pages/CompensationPage";
import FailureReportPage from "./pages/FailureReportPage";
import UserRegistrationPage from "./pages/UserRegistrationPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-green-50">
        <Routes>
          <Route path="/" element={<UserRegistrationPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/crop-registration" element={<CropRegistrationPage />} />
          <Route path="/crop-status" element={<CropStatusPage />} />
          <Route path="/buyer-demands" element={<BuyerDemandPage />} />
          <Route path="/agreements" element={<AgreementPage />} />
          <Route path="/compensation" element={<CompensationPage />} />
          <Route path="/failure-report" element={<FailureReportPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;