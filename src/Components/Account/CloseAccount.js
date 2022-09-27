import React from "react";

function CloseAccount() {
  return (
    <div>
      <div className="container sub-account close-account">
        <h4 className="section-title">Close Account</h4>
        <p>Read Carefully</p>
        <p>
          You are about to close your account. This will lead to deletion of all
          your data. All products and services you access through your account
          will no longer be available
        </p>
        <p>It may take up to 30 days for your request to be completed</p>
        <p>
          Our customer care agents will process your request during this time
        </p>
        <p>
          Please select the main reason that is prompting you to close your
          account
        </p>
        <form>
          <div className="mb-3">
            <select className="">
              <label>Select a reason below </label>
              <option>I am tired</option>
              <option>I am broke</option>
              <option>I am broke</option>
              <option>I am broke</option>
            </select>
          </div>

          <label>
            <input type="checkbox" required />
            <span className="ml-2">
              I want to close my account and delete all my personal data
            </span>
          </label>
          <div className="flex justify-center">
            <button>Close my account</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CloseAccount;
