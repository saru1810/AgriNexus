import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import CropRegistrationPage from "./pages/CropRegistrationPage";
import CropStatusPage from "./pages/CropStatusPage";
import FailureReportPage from "./pages/FailureReportPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-green-50">
        {/* Header / Navigation */}
        <header className="bg-green-600 text-white py-4 shadow-md">
          <div className="container flex justify-between items-center">
            <h1 className="text-2xl font-bold">Farmer Portal</h1>
            <nav className="space-x-4">
              <Link to="/" className="hover:underline">Dashboard</Link>
              <Link to="/register" className="hover:underline">Register Crop</Link>
              <Link to="/status" className="hover:underline">Update Status</Link>
              <Link to="/report" className="hover:underline">Report Failure</Link>
            </nav>
          </div>
        </header>

        {/* Pages */}
        <main className="container py-6">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/register" element={<CropRegistrationPage />} />
            <Route path="/status" element={<CropStatusPage />} />
            <Route path="/report" element={<FailureReportPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-green-600 text-white py-4 mt-6 text-center">
          &copy; {new Date().getFullYear()} Farmer Portal. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
