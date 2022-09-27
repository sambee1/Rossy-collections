import React from "react";

function Overview() {
  return (
    <div className="overview sub-account container mt-3 mb-3">
      <h4 className="section-title">Account Overview</h4>
      <div className="flex flex-row gap-4 mb-4">
        <div className="overview-section basis-1/2">
          <h5>Account Details</h5>
          <p className="font-bold">Samuel Nnaji</p>
          <p>nnajisamuel5@gmail</p>
          <p>Male</p>
        </div>
        <div className="overview-section basis-1/2">
          <h5>Address Book</h5>
          <p>Your default shopping address:</p>
          <div className="overview-address">
            <p>Samuel Nnaji</p>
            <p>12 Halima Crescent U/Sunday</p>
            <p>Sabo, Kaduna</p>
            <p>08106601094</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 mb-5">
        <div className="overview-section basis-1/2">
          <h5>Account Statistics</h5>
          <p>Completed Orders - 4</p>
          <p>Returned Items - 3</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
