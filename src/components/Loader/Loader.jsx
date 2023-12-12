// Loader.jsx
import React from "react";
import "./Loader.css"; // Create a separate CSS file for styling

function Loader() {
  return (
    <div className="loader-container">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        Loading...
      </p>
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
