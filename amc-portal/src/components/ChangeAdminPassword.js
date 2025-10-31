import React, { useState } from "react";
import BackButton from "./BackButton";

// Demo only; in production, update password securely in backend/db
let adminPassword = "admin123";

function ChangeAdminPassword({ onBack }) {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [msg, setMsg] = useState("");

  function handleChange(e) {
    e.preventDefault();
    if (oldPass === adminPassword && newPass) {
      adminPassword = newPass;
      setMsg("Password changed successfully!");
    } else {
      setMsg("Old password incorrect.");
    }
    setOldPass("");
    setNewPass("");
  }

  return (
    <div className="card" style={{ maxWidth: 340 }}>
      <h2>Change Admin Password</h2>
      {msg && <div style={{ marginBottom: 8, color: msg.includes("success") ? "green" : "red" }}>{msg}</div>}
      <form onSubmit={handleChange} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input
          type="password"
          placeholder="Old Password"
          value={oldPass}
          onChange={e => setOldPass(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPass}
          onChange={e => setNewPass(e.target.value)}
        />
        <button type="submit" style={{ margin: "12px 0" }}>Change</button>
      </form>
      <BackButton onClick={onBack} />
    </div>
  );
}

export default ChangeAdminPassword;
