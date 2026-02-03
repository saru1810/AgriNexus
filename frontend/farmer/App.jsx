import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import UserRegistrationPage from "./src/pages/UserRegistrationPage";
import DashboardPage from "./src/pages/DashboardPage";
import CropRegistrationPage from "./src/pages/CropRegistrationPage";
import CropStatusPage from "./src/pages/CropStatusPage";
import FailureReportPage from "./src/pages/FailureReportPage";
import CompensationPage from "./src/pages/CompensationPage";
import AgreementPage from "./src/pages/AgreementPage";

// PageWrapper handles the back button
const PageWrapper = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Show back button only if not dashboard or root
  const showBack =
    location.pathname !== "/" && location.pathname !== "/dashboard";

  return (
    <div className="max-w-5xl mx-auto p-4">
      {showBack && (
        <button
          onClick={() => navigate(-1)}
          className="mb-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
        >
          ← Back
        </button>
      )}
      {children}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PageWrapper>
              <UserRegistrationPage />
            </PageWrapper>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PageWrapper>
              <DashboardPage />
            </PageWrapper>
          }
        />

        <Route
          path="/crop-registration"
          element={
            <PageWrapper>
              <CropRegistrationPage />
            </PageWrapper>
          }
        />

        <Route
          path="/crop-status"
          element={
            <PageWrapper>
              <CropStatusPage />
            </PageWrapper>
          }
        />

        <Route
          path="/failure-report"
          element={
            <PageWrapper>
              <FailureReportPage />
            </PageWrapper>
          }
        />

        <Route
          path="/compensation-report"
          element={
            <PageWrapper>
              <CompensationPage />
            </PageWrapper>
          }
        />

        <Route
          path="/agreement"
          element={
            <PageWrapper>
              <AgreementPage />
            </PageWrapper>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;