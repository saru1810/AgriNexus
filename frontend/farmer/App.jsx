import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserRegistrationPage from "./src/pages/UserRegistrationPage";
import DashboardPage from "./src/pages/DashboardPage";
import CropRegistrationPage from "./src/pages/CropRegistrationPage";
import CropStatusPage from "./src/pages/CropStatusPage";
import FailureReportPage from "./src/pages/FailureReportPage";
import AgreementPage from "./src/pages/AgreementPage";
import CompensationPage from "./src/pages/CompensationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserRegistrationPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route
          path="/crop-registration"
          element={<CropRegistrationPage />}
        />
        <Route path="/crop-status" element={<CropStatusPage />} />
        <Route path="/failure-report" element={<FailureReportPage />} />
        <Route path="/agreement" element={<AgreementPage />} />
        <Route
          path="/compensation-report"
          element={<CompensationPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
