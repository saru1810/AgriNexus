const connectDB = require("./config/db");
connectDB();



const express = require("express");
const app = express();

app.use(express.json());

// 👇 add this
const buyerRoutes = require("./routes/buyer.routes");

// 👇 add this
app.use("/api/buyer", buyerRoutes);
const farmerRoutes = require("./routes/farmer.routes");


app.use("/api/farmer", farmerRoutes);

const reportRoutes = require("./routes/report.routes");
app.use("/api/report", reportRoutes);




app.get("/", (req, res) => {
  res.send("AgriNexus Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
