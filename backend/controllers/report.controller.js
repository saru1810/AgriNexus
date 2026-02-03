// backend/controllers/report.controller.js

exports.getCompensationReport = (req, res) => {
  res.json({
    farmerName: "Ravi",
    crop: "Rice",
    reason: "Crop failure due to weather conditions",
    support: "Eligible for government compensation scheme"
  });
};
