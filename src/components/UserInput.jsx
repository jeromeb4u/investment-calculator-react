import React from "react";

export default function UserInput({ label }) {
  return (
    <>
      <div id="user-input">
        <label>{label}</label>
        <input type="number" />
      </div>
    </>
  );
}
