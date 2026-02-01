const SupplyDemand = () => {
  const data = [
    { crop: "Rice", quantity: 1000, price: 40, supplier: "Farmer A" },
    { crop: "Wheat", quantity: 500, price: 35, supplier: "Farmer B" },
  ];

  return (
    <div style={container}>
      <h1 style={title}>Supply vs Demand</h1>

      <div style={tableWrapper}>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Crop</th>
              <th style={th}>Quantity (kg)</th>
              <th style={th}>Price (₹)</th>
              <th style={th}>Supplier</th>
              <th style={th}>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index} style={row}>
                <td style={td}>{item.crop}</td>
                <td style={td}>{item.quantity}</td>
                <td style={td}>{item.price}</td>
                <td style={td}>{item.supplier}</td>
                <td style={td}>
                  <button style={btn}>Agree</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ===== Styles ===== */

const container = {
  width: "100%",
};

const title = {
  fontSize: "32px",
  marginBottom: "20px",
};

const tableWrapper = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  width: "100%",
  overflowX: "auto",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  textAlign: "center",
};

const th = {
  backgroundColor: "#1b5e20",
  color: "white",
  padding: "12px",
  fontSize: "16px",
};

const td = {
  padding: "12px",
  borderBottom: "1px solid #e0e0e0",
  fontSize: "15px",
};

const row = {
  transition: "0.2s",
};

const btn = {
  backgroundColor: "#ff9800",
  border: "none",
  color: "black",
  padding: "6px 14px",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default SupplyDemand;
