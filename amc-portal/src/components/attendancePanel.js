import React, { useState } from "react";
import BackButton from "./BackButton";

// This component can be used for additional advanced attendance management.
function AttendancePanel({ onBack }) {
  const [attendanceList, setAttendanceList] = useState([]);
  const [form, setForm] = useState({
    usn: "",
    section: "",
    subject: "",
    date: "",
    status: ""
  });

  const handleAdd = e => {
    e.preventDefault();
    setAttendanceList([...attendanceList, form]);
    setForm({ usn: "", section: "", subject: "", date: "", status: "" });
  };

  return (
    <div className="card" style={{ maxWidth: 420 }}>
      <h2>Attendance Panel</h2>
      <form onSubmit={handleAdd} style={{ gap: 8, display: "flex", flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="USN"
          value={form.usn}
          onChange={e => setForm({ ...form, usn: e.target.value })}
        />
        <input
          type="text"
          placeholder="Section"
          value={form.section}
          onChange={e => setForm({ ...form, section: e.target.value })}
        />
        <input
          type="text"
          placeholder="Subject Code"
          value={form.subject}
          onChange={e => setForm({ ...form, subject: e.target.value })}
        />
        <input
          type="date"
          placeholder="Date"
          value={form.date}
          onChange={e => setForm({ ...form, date: e.target.value })}
        />
        <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
          <option value="">Present/Absent</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
        <button type="submit">Add</button>
      </form>
      <div>
        <h4 style={{ marginTop: 12 }}>Attendance List</h4>
        <ul>
          {attendanceList.map((a, idx) => (
            <li key={idx}>
              {a.usn} - {a.section} - {a.subject} - {a.date} - {a.status}
            </li>
          ))}
        </ul>
      </div>
      <BackButton onClick={onBack} />
    </div>
  );
}

export default AttendancePanel
