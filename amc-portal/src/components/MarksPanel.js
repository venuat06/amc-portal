import React, { useState } from "react";
import BackButton from "./BackButton";

// This component can be used for advanced IA marks management.
function MarksPanel({ onBack }) {
  const [marksList, setMarksList] = useState([]);
  const [form, setForm] = useState({
    usn: "",
    section: "",
    subject: "",
    type: "IA1",
    total: "",
    obtained: ""
  });

  const handleAdd = e => {
    e.preventDefault();
    setMarksList([...marksList, form]);
    setForm({ usn: "", section: "", subject: "", type: "IA1", total: "", obtained: "" });
  };

  return (
    <div className="card" style={{ maxWidth: 420 }}>
      <h2>Marks Panel</h2>
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
        <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
          <option value="IA1">IA1</option>
          <option value="IA2">IA2</option>
        </select>
        <input
          type="number"
          placeholder="Total Marks"
          value={form.total}
          onChange={e => setForm({ ...form, total: e.target.value })}
        />
        <input
          type="number"
          placeholder="Obtained Marks"
          value={form.obtained}
          onChange={e => setForm({ ...form, obtained: e.target.value })}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        <h4 style={{ marginTop: 12 }}>Marks List</h4>
        <ul>
          {marksList.map((m, idx) => (
            <li key={idx}>
              {m.usn} - {m.section} - {m.subject} - {m.type} - {m.obtained}/{m.total}
            </li>
          ))}
        </ul>
      </div>
      <BackButton onClick={onBack} />
    </div>
  );
}

export default MarksPanel;
