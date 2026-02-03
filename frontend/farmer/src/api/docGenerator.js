// src/api/docGenerator.js
import jsPDF from "jspdf";

// Generate PDF for Compensation Report (downloadable)
export const generateCompensationPDF = (data) => {
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text("Compensation Report", 20, 20);

  data.forEach((item, index) => {
    doc.text(
      `${index + 1}. Crop: ${item.crop}, Quantity: ${item.quantity} kg, Amount: ₹${item.amount}`,
      20,
      30 + index * 10
    );
  });

  doc.save("Compensation_Report.pdf"); // triggers download
};

// Generate PDF for Agreement (preview only)
export const generateAgreementPDF = (data) => {
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text("Agreement", 20, 20);

  doc.setFontSize(12);
  doc.text(`Farmer Name: ${data.farmerName}`, 20, 30);
  doc.text(`Crop: ${data.crop}`, 20, 40);
  doc.text(`Quantity: ${data.quantity} kg`, 20, 50);
  doc.text(`Agreement Terms: ${data.terms}`, 20, 60);

  // Instead of saving, return as data URL for preview
  return doc.output("datauristring");
};
