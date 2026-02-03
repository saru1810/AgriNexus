// backend/config/db.js

const connectDB = async () => {
  try {
    console.log("Database connected (mock connection for demo)");
  } catch (error) {
    console.error("DB connection failed");
  }
};

module.exports = connectDB;
