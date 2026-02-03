const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

/* =========================
   AUTH / REGISTRATION
========================= */
export async function registerFarmer(payload) {
  return safePost("/farmer/register", payload);
}

/* =========================
   CROP
========================= */
export async function registerCrop(payload) {
  return safePost("/crop/register", payload);
}

export async function updateCropStatus(payload) {
  return safePost("/crop/status", payload);
}

export async function reportCropFailure(payload) {
  return safePost("/crop/failure", payload);
}

/* =========================
   AGREEMENT
========================= */
export async function acceptAgreement(payload) {
  return safePost("/agreement/accept", payload);
}

/* =========================
   COMPENSATION
========================= */
export async function getCompensationReport(payload) {
  return safePost("/compensation/report", payload);
}

/* =========================
   SAFE POST WRAPPER
========================= */
async function safePost(endpoint, payload) {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Server error");
    }

    return await res.json();
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}
