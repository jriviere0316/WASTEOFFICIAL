import React from "react";
import "./Merch.css";

function Merch() {
  return (
    <div className="merch-container">
      <h2>Official WASTE Merch</h2>
      <p>Get official WASTE merch below.</p>

      {/* Open in New Tab Button */}
      <div className="merch-button">
        <a
          href="https://shopgjp.com/pages/waste"
          target="_blank"
          rel="noopener noreferrer"
          className="shop-button"
        >
          Visit Merch Store
        </a>
      </div>
    </div>
  );
}

export default Merch;
