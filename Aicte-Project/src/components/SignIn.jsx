import React, { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }
    setError("");
    console.log("User Data: ", formData);
    alert("Sign In Successful!");
  };

  return (
    <div style={cardStyle}>
      <h2>Sign In</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" style={buttonStyle}>Sign In</button>
      </form>
    </div>
  );
};

// Styles
const cardStyle = {
  maxWidth: "350px",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  textAlign: "center",
  backgroundColor: "#fff",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
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

export default SignIn;
