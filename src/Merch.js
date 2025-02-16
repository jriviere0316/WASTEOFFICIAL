import React from "react";
import "./Merch.css";
import merchExample from './Assets/wasteMerchExample.png'

function Merch() {
  return (
    <div className="merch-container">
      <h2>Official WASTE Merch</h2>
      <img src={merchExample} alt="WASTE Merch Example" className="merch-example" />

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
