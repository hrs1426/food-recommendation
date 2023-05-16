import { Link } from "react-router-dom";

export default function LoginPage() {
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
          padding: "2rem",
          width: "25%",
          border: "1px solid black",
          borderRadius: "16px",
        }}
      >
        <h2>Sign In</h2>
        <h5>Enter your email and password</h5>
        <form
          style={{
            width: "100%",
            marginTop: "20px",
          }}
        >
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            required
            style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            required
            style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
          />
          <br />

          <button type="submit" style={{}}>
            Signin
          </button>
        </form>

        <div style={{ display: "flex", marginTop: "12px" }}>
          <p style={{ marginRight: "5px" }}>New Here?</p>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
