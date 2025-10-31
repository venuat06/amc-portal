import React, { useState } from "react";

// Dummy teacher data
const TEACHERS = [
  { tid: "T1", password: "teach123" },
  { tid: "T2", password: "pass456" }
];

function LoginTeacher({ onSuccess, onBack }) {
  const [tid, setTid] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    const found = TEACHERS.some(
      t => t.tid === tid && t.password === password
    );
    if (found) {
      setErr("");
      onSuccess();
    } else {
      setErr("Invalid teacher credentials.");
    }
  }

  return (
    <div className="card" style={{ maxWidth: 340 }}>
      <h2 style={{ textAlign: "center" }}>Teacher Login</h2>
      {err && <div style={{ color: "red", marginBottom: 10 }}>{err}</div>}
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Teacher ID"
          value={tid}
          onChange={e => setTid(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" style={{ margin: "12px 0" }}>
          Login
        </button>
      </form>
      <button className="back-btn" onClick={onBack}>Back</button>
    </div>
  );
}

export default Login
