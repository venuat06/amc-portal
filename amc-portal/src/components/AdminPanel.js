import React, { useState } from "react";
import BackButton from "./BackButton";

function AdminPanel({ onLogout }) {
  // Mock state lists
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [form, setForm] = useState({
    usn: "",
    name: "",
    dob: "",
    section: "",
    dept: "",
    gender: "",
    address: "",
    contact: "",
    tuition: "",
    books: "",
    skill: "",
    exam: "",
    registration: "",
    subjects: ""
  });
  const [teacherForm, setTeacherForm] = useState({
    tid: "", password: ""
  });

  // Add student
  const handleAddStudent = e => {
    e.preventDefault();
    setStudents([...students, form]);
    setForm({
      usn: "",
      name: "",
      dob: "",
      section: "",
      dept: "",
      gender: "",
      address: "",
      contact: "",
      tuition: "",
      books: "",
      skill: "",
      exam: "",
      registration: "",
      subjects: ""
    });
  };

  // Add teacher
  const handleAddTeacher = e => {
    e.preventDefault();
    setTeachers([...teachers, teacherForm]);
    setTeacherForm({ tid: "", password: "" });
  };

  return (
    <div className="card" style={{ maxWidth: 530 }}>
      <h2>Admin Panel</h2>
      <button className="back-btn" onClick={onLogout}>Logout</button>

      {/* Add Student */}
      <h3>Add Student</h3>
      <form onSubmit={handleAddStudent} style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <input placeholder="USN" value={form.usn} onChange={e => setForm({ ...form, usn: e.target.value })} />
        <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input type="date" placeholder="DOB" value={form.dob} onChange={e => setForm({ ...form, dob: e.target.value })} />
        <input placeholder="Section" value={form.section} onChange={e => setForm({ ...form, section: e.target.value })} />
        <input placeholder="Department" value={form.dept} onChange={e => setForm({ ...form, dept: e.target.value })} />
        <input placeholder="Gender" value={form.gender} onChange={e => setForm({ ...form, gender: e.target.value })} />
        <input placeholder="Address" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
        <input placeholder="Contact" value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} />
        <input placeholder="Tuition Fees" value={form.tuition} onChange={e => setForm({ ...form, tuition: e.target.value })} />
        <input placeholder="Book Fees" value={form.books} onChange={e => setForm({ ...form, books: e.target.value })} />
        <input placeholder="Skill Fees" value={form.skill} onChange={e => setForm({ ...form, skill: e.target.value })} />
        <input placeholder="Exam Fees" value={form.exam} onChange={e => setForm({ ...form, exam: e.target.value })} />
        <input placeholder="Registration Fees" value={form.registration} onChange={e => setForm({ ...form, registration: e.target.value })} />
        <input placeholder="Subject Codes (comma separated)" value={form.subjects} onChange={e => setForm({ ...form, subjects: e.target.value })} />
        <button type="submit">Add Student</button>
      </form>

      {/* Add Teacher */}
      <h3 style={{marginTop: 20}}>Add Teacher</h3>
      <form onSubmit={handleAddTeacher} style={{ display: "flex", gap: 8 }}>
        <input placeholder="Teacher ID" value={teacherForm.tid} onChange={e => setTeacherForm({ ...teacherForm, tid: e.target.value })} />
        <input type="password" placeholder="Password" value={teacherForm.password} onChange={e => setTeacherForm({ ...teacherForm, password: e.target.value })} />
        <button type="submit">Add Teacher</button>
      </form>

      {/* Student and Teacher lists (Demo only) */}
      <div>
        <h3 style={{marginTop: 18}}>Students Added:</h3>
        <ul>
          {students.map((stu, idx) => (
            <li key={idx}>{stu.usn} - {stu.name}</li>
          ))}
        </ul>
        <h3>Teachers Added:</h3>
        <ul>
          {teachers.map((t, idx) => (
            <li key={idx}>{t.tid}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Admin
