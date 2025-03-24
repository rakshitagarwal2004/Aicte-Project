import React from "react";

const Dashboard = () => {
  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Welcome to the Dashboard</h1>
      <p style={{ fontSize: "1.2rem", color: "#555" }}>
        Manage your account and view important information.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "20px" }}>
        <button style={buttonStyle}>Profile</button>
        <button style={buttonStyle}>Settings</button>
        <button style={buttonStyle}>Logout</button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <h2>Sign In</h2>
          <input type="email" placeholder="Email" style={inputStyle} />
          <input type="password" placeholder="Password" style={inputStyle} />
          <button style={buttonStyle}>Sign In</button>
        </div>

        <div style={cardStyle}>
          <h2>Sign Up</h2>
          <input type="email" placeholder="Email" style={inputStyle} />
          <input type="password" placeholder="Password" style={inputStyle} />
          <button style={buttonStyle}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

// Styles
const cardStyle = {
  padding: "20px",
  width: "350px",
  backgroundColor: "#fff",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  borderRadius: "8px",
  textAlign: "center",
};

const buttonStyle = {
  backgroundColor: "black",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "1rem",
};

const inputStyle = {
  width: "90%",
  padding: "10px",
  marginBottom: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "1rem",
};

export default Dashboard;
