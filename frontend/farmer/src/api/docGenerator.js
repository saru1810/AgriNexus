// src/api/docGenerator.js
import { jsPDF } from "jspdf";

export async function generateDocument(farmerData) {
  try {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Farmer Report", 20, 20);

    doc.setFontSize(12);
    doc.text(`Farmer Name: ${farmerData.name}`, 20, 40);
    doc.text(`Crop: ${farmerData.crop}`, 20, 50);
    doc.text(`Status: ${farmerData.status}`, 20, 60);

    // Convert PDF to Blob and create a URL for download
    const pdfBlob = doc.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);

    return { url: pdfUrl }; // matches what DocGeneratorButton expects
  } catch (err) {
    console.error("Error generating document:", err);
    return null;
  }
}
