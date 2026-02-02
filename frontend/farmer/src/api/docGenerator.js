// This file ONLY handles API communication
// It does NOT generate documents on frontend

export const generateCompensationReport = async (reportData) => {
  try {
    const response = await fetch("http://localhost:5000/api/generate-report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reportData),
    });

    if (!response.ok) {
      throw new Error("Failed to generate report");
    }

    // Expecting PDF from backend
    const blob = await response.blob();

    // Create download
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Compensation_Report.pdf";

    document.body.appendChild(link);
    link.click();
    link.remove();

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Document generation error:", error);
    alert("Unable to generate compensation report. Please try again.");
  }
};