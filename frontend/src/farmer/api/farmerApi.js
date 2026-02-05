// src/api/farmerApi.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

/* =========================
   AUTH / REGISTRATION
========================= */
export async function registerFarmer(payload) {
  return safePost("/farmer/register", payload);
}

export async function getFarmers() {
  return safeGet("/farmer/list"); // placeholder GET
}

/* =========================
   CROP
========================= */
export async function registerCrop(payload) {
  return safePost("/crop/register", payload);
}

export async function getCrops() {
  return safeGet("/crop/list"); // placeholder GET
}

export async function updateCropStatus(payload) {
  return safePost("/crop/status", payload);
}

export async function getCropStatuses() {
  return safeGet("/crop/status/list"); // placeholder GET
}

export async function reportCropFailure(payload) {
  return safePost("/crop/failure", payload);
}

export async function getFailureReports() {
  return safeGet("/crop/failure/list"); // placeholder GET
}

/* =========================
   AGREEMENT
========================= */
export async function acceptAgreement(payload) {
  return safePost("/agreement/accept", payload);
}

export async function getAgreements() {
  return safeGet("/agreement/list"); // placeholder GET
}

/* =========================
   COMPENSATION
========================= */
export async function getCompensationReport(payload) {
  return safePost("/compensation/report", payload);
}

/* =========================
   PRICE GUIDANCE
========================= */
export async function getPriceGuidance() {
  return safeGet("/price-guidance"); // placeholder GET
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

/* =========================
   SAFE GET WRAPPER
========================= */
async function safeGet(endpoint) {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`);

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
