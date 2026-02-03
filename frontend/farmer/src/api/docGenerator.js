// src/api/docGenerator.js

import jsPDF from "jspdf";

/**
 * Generate PDF for Crop Registration / Compensation Report
 * @param {Object} data - the data to include in PDF
 * @param {string} data.title - Title of the document
 * @param {Array} data.fields - Array of { label, value } to display
 * @param {string} [fileName] - Optional file name
 */
export function generatePDF(data, fileName = "document.pdf") {
  try {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.setTextColor(22, 163, 74); // match green from farmer.css
    doc.text(data.title, 14, 20);

    // Line under title
    doc.setDrawColor(22, 163, 74);
    doc.setLineWidth(0.5);
    doc.line(14, 22, 196, 22);

    // Add fields
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    let y = 35;
    data.fields.forEach((field) => {
      doc.text(`${field.label}: ${field.value}`, 14, y);
      y += 10;
    });

    // Save PDF
    doc.save(fileName);
  } catch (error) {
    console.error("PDF generation failed:", error);
    throw error;
  }
}
