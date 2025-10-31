import React, { useState } from "react";

function Home({ onStudentSearch, onAdminClick, onTeacherClick }) {
  // Temporary form state for student search
  const [usn, setUsn] = useState("");
  const [dob, setDob] = useState("");

  // Simulate student data lookup (replace with backend/API in real use)
  const handleSearch = (e) => {
    e.preventDefault();
    // For demo, just pass data back
    if (usn && dob) {
      // You would replace this with actual student lookup logic
      // Demo object:
      onStudentSearch({
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
      alert("Please enter USN and Date of Birth");
    }
  };

  return (
    <div className="card" style={{ maxWidth: 420 }}>
      <h2 style={{ textAlign: "center" }}>Student Info Lookup</h2>
      <form className="search-box" onSubmit={handleSearch} style={{ display: "block", margin: "0 auto" }}>
        <input
          type="text"
          placeholder="Enter USN"
          value={usn}
          onChange={e => setUsn(e.target.value)}
        />
        <input
          type="date"
          placeholder="DOB"
          value={dob}
          onChange={e => setDob(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default
