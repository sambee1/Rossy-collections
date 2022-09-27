import React from "react";
import { Link } from "react-router-dom";

function Address() {
  return (
    <div>
      <div className="container address sub-account mt-3">
        <h4 className="section-title">Addresses(2)</h4>{" "}
        <Link to="add-address">
          <button>Add Address</button>
        </Link>
        <p>You have no Delivery Address! </p>
      </div>
    </div>
  );
}

export default Address;
