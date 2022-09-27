import React from "react";

function Inbox() {
  return (
    <div>
      <div className="container sub-account order">
        <h4 className="section-title">Inbox</h4>
        <div className="flex justify-center">
          <p className="order-1 mt-5">You have no Messages currently!</p>
        </div>
        <div className="flex justify-center">
          <p>Here you will be able to see any Message we send to you</p>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
