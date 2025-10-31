import React from "react";

function Footer() {
  return (
    <footer style={{
      marginTop: 32,
      width: "100%",
      background: "#223a94",
      color: "#fff",
      padding: "16px 0",
      textAlign: "center",
      fontSize: "1em",
      letterSpacing: 1
    }}>
      &copy; {new Date().getFullYear()} AMC Engineering College | All rights reserved.
    </footer>
  );
}

export default Footer;
