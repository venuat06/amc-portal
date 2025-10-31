import React, { useState } from "react";

const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123"; // In real apps, use backend authentication

function LoginAdmin({ onSuccess, onBack }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setErr("");
      onSuccess();
    } else {
      setErr("Invalid admin credentials.");
    }
  }

  return (
    <div className="card" style={{ maxWidth: 340 }}>
      <h2 style={{ textAlign: "center" }}>Admin Login</h2>
      {err && <div style={{ color: "red", marginBottom: 10 }}>{err}</div>}
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Admin Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
