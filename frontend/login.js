import { useState } from "react";
 // import CSS file

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8081/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const text = await res.text();
    setMessage(text);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="login-input"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <br />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      <p className="login-message">{message}</p>
      <p className="login-footer">
        Don’t have an account? <a href="/signup">Signup here</a>
      </p>
    </div>
  );
}
