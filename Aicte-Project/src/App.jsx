import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: "900px", margin: "auto", padding: "20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Auction Website</h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>Buy and sell items with ease.</p>
        <Dashboard />

        {/* Sign In & Sign Up Section */}
        {/* <div style={{ display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap", marginTop: "20px" }}>
          <SignIn />
          <SignUp />
        </div> */}
      </div>
    </div>
  );
}

export default App;
