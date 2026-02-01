import React, { useState } from "react";
import { generateDocument } from "../api/docGenerator";

const DocGeneratorButton = ({ farmerData }) => {
  const [loading, setLoading] = useState(false);
  const [docUrl, setDocUrl] = useState("");

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateDocument(farmerData);

    if (result && result.url) {
      setDocUrl(result.url);
    } else {
      alert("Failed to generate document. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="mt-4 text-center">
      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Report"}
      </button>

      {docUrl && (
        <div className="mt-3">
          <a
            href={docUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline"
          >
            Download Report
          </a>
        </div>
      )}
    </div>
  );
};

export default DocGeneratorButton;
