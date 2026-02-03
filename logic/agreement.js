function createAgreement(data) {
  const { cropName, quantity, deliveryDate, farmerConsent, buyerConsent } = data;

  if (!farmerConsent || !buyerConsent) {
    throw new Error("Consent required from both parties");
  }

  return {
    cropName,
    quantity,
    deliveryDate,
    agreedAt: new Date().toISOString()
  };
}

module.exports = { createAgreement };
