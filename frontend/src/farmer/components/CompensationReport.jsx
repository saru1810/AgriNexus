// src/components/CompensationReport.jsx
import React, { useEffect, useState } from "react";
import { getCompensationReport } from "../api/farmerApi";
import { generateCompensationPDF } from "../api/docGenerator";

const CompensationReport = ({ farmerId }) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReports = async () => {
      setLoading(true);
      setError("");
      try {
        const payload = { farmerId }; // backend may filter by farmer
        const data = await getCompensationReport(payload);
        setReports(data); // expected: array of {crop, quantity, amount, date}
      } catch (err) {
        console.error(err);
        setError("Failed to fetch compensation reports.");
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [farmerId]);

  const handleDownloadPDF = () => {
    generateCompensationPDF(reports);
    setTimeout(() => {
  navigate("/dashboard"); // Redirect to dashboard
}, 1200);
  };

  if (loading) return <p>Loading compensation reports...</p>;
  if (error) return <p className="error">{error}</p>;
  if (reports.length === 0) return <p>No compensation reports available.</p>;

  return (
    <div className="compensation-report">
      <h2>Compensation Report</h2>
      <table>
        <thead>
          <tr>
            <th>Crop</th>
            <th>Quantity (kg)</th>
            <th>Amount (₹)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index}>
              <td>{report.crop}</td>
              <td>{report.quantity}</td>
              <td>{report.amount}</td>
              <td>{report.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
};

export default CompensationReport;
