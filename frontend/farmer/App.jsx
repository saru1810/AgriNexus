import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import UserRegistrationPage from "./src/pages/UserRegistrationPage";
import DashboardPage from "./src/pages/DashboardPage";
import CropRegistrationPage from "./src/pages/CropRegistrationPage";
import CropStatusPage from "./src/pages/CropStatusPage";
import FailureReportPage from "./src/pages/FailureReportPage";
import CompensationPage from "./src/pages/CompensationPage";
import AgreementPage from "./src/pages/AgreementPage";

// PageWrapper with correct Back button logic
const PageWrapper = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation(); // reactive path

  return (
    <div>
      <div className="max-w-5xl mx-auto mb-4">
        {location.pathname !== "/dashboard" && location.pathname !== "/" && (
          <button
            onClick={() => navigate(-1)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mb-4"
          >
            ← Back
          </button>
        )}
      </div>
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