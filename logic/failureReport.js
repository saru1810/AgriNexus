function reportFailure(data) {
  const { cropName, failureDate, reason } = data;

  if (!cropName || !failureDate || !reason) {
    throw new Error("Failure reason and date required");
  }

  return {
    cropName,
    failureDate,
    reason,
    reportedAt: new Date().toISOString()
  };
}

module.exports = { reportFailure };
