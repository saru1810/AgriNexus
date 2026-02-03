import { useState } from "react";
import { createDemand } from "../services/demandService";
import { useNavigate } from "react-router-dom";

const DemandForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    crop: "",
    quantity: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.crop || !form.quantity || !form.price) {
      alert("⚠️ Please fill all fields");
      return;
    }

    createDemand(form);

    alert("✅ Demand created successfully!");

    setForm({ crop: "", quantity: "", price: "" });

    navigate("/buyer/my-demands");
  };

  return (
    <div style={wrapper}>
      <h1 style={{ marginBottom: "20px" }}>📦 Create Demand</h1>

      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={row}>
          <div style={field}>
            <label>Crop Name</label>
            <input
              type="text"
              name="crop"
              value={form.crop}
              onChange={handleChange}
              placeholder="Rice"
              style={input}
              required
            />
          </div>

          <div style={field}>
            <label>Quantity (kg)</label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder="1000"
              style={input}
              required
            />
          </div>
        </div>

        <div style={field}>
          <label>Price per kg (₹)</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="40"
            style={input}
            required
          />
        </div>

        <button type="submit" style={button}>
          Submit Demand
        </button>
      </form>
    </div>
  );
};

/* styles */
const wrapper = { width: "100%" };

const formStyle = {
  background: "white",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  maxWidth: "900px",
};

const row = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
};

const field = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  marginBottom: "15px",
};

const input = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const button = {
  marginTop: "10px",
  padding: "12px 20px",
  borderRadius: "8px",
  border: "none",
  background: "#1b5e20",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

export default DemandForm;
