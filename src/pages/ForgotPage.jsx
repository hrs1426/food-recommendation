import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPage() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2>Register Yourself</h2>
        <h5>Enter your details</h5>
        <form
          style={{
            width: "100%",
          }}
        >
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" name="name" id="name" required />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" name="email" id="email" required />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="password" id="password" required />
          <br />
          <label htmlFor="confirmpassword">Confirm Password</label>
          <br />
          <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            required
          />
        </form>
      </div>
    </div>
  );
}
