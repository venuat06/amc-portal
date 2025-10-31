import React, { useState } from "react";
import BackButton from "./BackButton";

function TeacherSection({ onLogout }) {
  const [attendance, setAttendance] = useState([]);
  const [marks, setMarks] = useState([]);
  const [active, setActive] = useState("attendance");
  const [attForm, setAttForm] = useState({
    section: "", subject: "", date: "", status: ""
  });
  const [marksForm, setMarksForm] = useState({
    section: "", subject: "", type: "IA1", total: "", obtained: ""
  });

  // Add attendance
  const handleAttendance = e => {
    e.preventDefault();
    setAttendance([...attendance, attForm]);
    setAttForm({ section: "", subject: "", date: "", status: "" });
  };
  // Add marks
  const handleMarks = e => {
    e.preventDefault();
    setMarks([...marks, marksForm]);
    setMarksForm({ section: "", subject: "", type: "IA1", total: "", obtained: "" });
  };

  return (
    <div className="card" style={{ maxWidth: 490 }}>
      <h2>Teacher Panel</h2>
      <button className="back-btn" onClick={onLogout}>Logout</button>
      <div style={{display: "flex", gap: 20, marginBottom: 16}}>
        <button className="section-btn" onClick={() => setActive("attendance")}>Mark Attendance</button>
        <button className="section-btn" onClick={() => setActive("marks")}>Add Internal Marks</button>
      </div>
      {active === "attendance" && (
        <>
          <h3>Attendance Entry</h3>
          <form onSubmit={handleAttendance} style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <input placeholder="Section" value={attForm.section} onChange={e => setAttForm({...attForm, section: e.target.value})} />
            <input placeholder="Subject Code" value={attForm.subject} onChange={e => setAttForm({...attForm, subject: e.target.value})} />
            <input type="date" placeholder="Date" value={attForm.date} onChange={e => setAttForm({...attForm, date: e.target.value})} />
            <select value={attForm.status} onChange={e => setAttForm({...attForm, status: e.target.value})}>
              <option value="">Present/Absent</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
            <button type="submit">Add</button>
          </form>
          <div>
            <h4 style={{marginTop:12}}>Attendance Records</h4>
            <ul>
              {attendance.map((a, idx) => (
                <li key={idx}>{a.section} - {a.subject} - {a.date} - {a.status}</li>
              ))}
            </ul>
          </div>
        </>
      )}
      {active === "marks" && (
        <>
          <h3>Internal Marks Entry</h3>
          <form onSubmit={handleMarks} style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <input placeholder="Section" value={marksForm.section} onChange={e => setMarksForm({...marksForm, section: e.target.value})} />
            <input placeholder="Subject Code" value={marksForm.subject} onChange={e => setMarksForm({...marksForm, subject: e.target.value})} />
            <select value={marksForm.type} onChange={e => setMarksForm({...marksForm, type: e.target.value})}>
              <option value="IA1">IA1</option>
              <option value="IA2">IA2</option>
            </select>
            <input type="number" placeholder="Total Marks" value={marksForm.total} onChange={e => setMarksForm({...marksForm, total: e.target.value})} />
            <input type="number" placeholder="Obtained Marks" value={marksForm.obtained} onChange={e => setMarksForm({...marksForm, obtained: e.target.value})} />
            <button type="submit">Add</button>
          </form>
          <div>
            <h4 style={{marginTop:12}}>Marks Records</h4>
            <ul>
              {marks.map((m, idx) => (
                <li key={idx}>{m.section} - {m.subject} - {m.type} - {m.obtained}/{m.total}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default TeacherSection;
