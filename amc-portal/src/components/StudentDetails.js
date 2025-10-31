import React, { useState } from "react";
import BackButton from "./BackButton";

function StudentDetails({ student, onBack }) {
  const [section, setSection] = useState(null);

  // Section renderers:
  const sections = [
    { key: "personal", label: "Personal Information" },
    { key: "fees", label: "Fees Details" },
    { key: "attendance", label: "Attendance" },
    { key: "marks", label: "IA Marks" },
    { key: "subjects", label: "Subjects" }
  ];

  const renderMain = () => (
    <div className="card" style={{ maxWidth: 430 }}>
      <h2 style={{ textAlign: "center" }}>{student.name}</h2>
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <div>USN: <strong>{student.usn}</strong></div>
        <div>Department: <strong>{student.dept}</strong></div>
        <div>Section: <strong>{student.section}</strong></div>
      </div>
      <div style={{ textAlign: "center" }}>
        {sections.map(({ key, label }) => (
          <button
            key={key}
            className="section-btn"
            onClick={() => setSection(key)}
          >{label}</button>
        ))}
      </div>
      <BackButton onClick={onBack} />
    </div>
  );

  // Individual section views:
  if (!section) return renderMain();

  if (section === "personal")
    return (
      <div className="card">
        <h2>Personal Information</h2>
        <div>Name: {student.name}</div>
        <div>Gender: {student.personal.gender}</div>
        <div>Address: {student.personal.address}</div>
        <div>Contact: {student.personal.contact}</div>
        <BackButton onClick={() => setSection(null)} />
      </div>
    );
  if (section === "fees")
    return (
      <div className="card">
        <h2>Fees Details</h2>
        <div>Tuition Fees: ₹{student.fees.tuition}</div>
        <div>Book Fees: ₹{student.fees.books}</div>
        <div>Skill Fees: ₹{student.fees.skill}</div>
        <div>Exam Fees: ₹{student.fees.exam}</div>
        <div>Registration Fees: ₹{student.fees.registration}</div>
        <BackButton onClick={() => setSection(null)} />
      </div>
    );
  if (section === "attendance")
    return (
      <div className="card">
        <h2>Attendance</h2>
        {student.attendance &&
          Object.entries(student.attendance).map(([sub, list]) => (
            <div key={sub}>
              <div>
                <strong>{sub}</strong>: {list.join(", ")}
              </div>
            </div>
          ))}
        <BackButton onClick={() => setSection(null)} />
      </div>
    );
  if (section === "marks")
    return (
      <div className="card">
        <h2>Internal Assessment Marks</h2>
        {student.marks &&
          ["IA1", "IA2"].map(type =>
            student.marks[type] ?
              Object.entries(student.marks[type]).map(([sub, markArr]) => (
                <div key={sub}>
                  <div>
                    <strong>{sub} ({type})</strong>: {markArr.join(", ")}
                  </div>
                </div>
              )) : null
          )}
        <BackButton onClick={() => setSection(null)} />
      </div>
    );
  if (section === "subjects")
    return (
      <div className="card">
        <h2>Subjects</h2>
        <ul>
          {student.subjects.map(s => (
            <li key={s.code}>
              {s.code}: {s.name}
            </li>
          ))}
        </ul>
        <BackButton onClick={() => setSection(null)} />
      </div>
    );

  return null;
}

export default StudentDetails;
