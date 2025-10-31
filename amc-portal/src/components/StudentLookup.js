import React, { useState } from "react";

function StudentLookup({ onStudentFound }) {
  const [usn, setUsn] = useState("");
  const [dob, setDob] = useState("");

  // Simulated database lookup for demo; replace with real DB/API in production
  const handleSearch = (e) => {
    e.preventDefault();
    if (usn && dob) {
      // Demo student, replace with fetch logic
      onStudentFound({
        usn,
        dob,
        name: "Demo Student",
        section: "A",
        dept: "CSE",
        personal: { gender: "Male", address: "Bangalore", contact: "9876543210" },
        fees: { tuition: 70000, books: 2500, skill: 3000, exam: 2000, registration: 1000 },
        attendance: { "18CS51": ["Present", "Absent"] },
        marks: { IA1: { "18CS51": [20, 25] }, IA2: { "18CS51": [23, 22] } },
        subjects: [
          { code: "18CS51", name: "DBMS" },
          { code: "18CS52", name: "CN" }
        ]
      });
    } else {
      alert("Please enter both USN and DOB");
    }
  };

  return (
    <div className="card" style={{ maxWidth: 420 }}>
      <h2 style={{ textAlign: "center" }}>Student Lookup</h2>
      <form className="search-box" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="USN"
          value={usn}
          onChange={e => setUsn(e.target.value)}
        />
        <input
