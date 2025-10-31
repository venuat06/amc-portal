import React from "react";

function Header({ onAdminLogin, onTeacherLogin }) {
  return (
    <header className="header">
      {/* Left: College Logo */}
      <img
        src={process.env.PUBLIC_URL + "/logo.png"}
        alt="College Logo"
        className="logo"
      />

      {/* Center: College Info */}
      <div className="college-info">
        AMC Engineering College <br />
        <span style={{ fontWeight: 400, fontSize: "1em" }}>
          Bangalore, Karnataka
        </span>
      </div>

      {/* Right: Login Buttons */}
      <div style={{ position: "absolute", right: "32px", top: "16px" }}>
        <button className="admin-login" onClick={onAdminLogin}>
          Admin Login
        </button>
        <button className="teacher-login" onClick={onTeacherLogin}>
          Teacher Login
        </button>
      </div>
    </header>
  );
}

export default Header;
