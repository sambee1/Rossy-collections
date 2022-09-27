import React from "react";
import { Link } from "react-router-dom";

function Orders() {
  return (
    <div>
      <div className="container sub-account order">
        <h4 className="section-title hidden md:block">Orders</h4>
        <div className="flex justify-center">
          <p className="order-1">You have no orders currently!</p>
        </div>
        <div className="flex justify-center">
          <p>
            All orders will be saved here for you to access their state anytime
          </p>
        </div>
        <div className="flex justify-center">
          <Link to="/">
            <button>Continue shopping</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Orders;
