import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentLookup from "./components/StudentLookup";
import StudentDetails from "./components/StudentDetails";
import LoginAdmin from "./components/LoginAdmin";
import LoginTeacher from "./components/LoginTeacher";
import AdminPanel from "./components/AdminPanel";
import TeacherSection from "./components/TeacherSection";
import Home from "./components/Home";

function App() {
  const [page, setPage] = useState("home");
  const [userType, setUserType] = useState(null); // "admin", "teacher", "student"
  const [student, setStudent] = useState(null);   // student object after lookup

  const handlePageChange = (nextPage) => setPage(nextPage);
  const handleStudentFound = (stu) => {
    setStudent(stu);
    setPage("studentDetails");
  };
  const handleLogout = () => {
    setUserType(null);
    setStudent(null);
    setPage("home");
  };

  return (
    <>
      <Header
        onAdminLogin={() => setPage("adminLogin")}
        onTeacherLogin={() => setPage("teacherLogin")}
      />
      <main>
        {page === "home" && (
          <Home
            onStudentSearch={handleStudentFound}
            onAdminClick={() => setPage("adminLogin")}
            onTeacherClick={() => setPage("teacherLogin")}
          />
        )}
        {page === "studentLookup" && (
          <StudentLookup onStudentFound={handleStudentFound} />
        )}
        {page === "studentDetails" && student && (
          <StudentDetails student={student} onBack={() => setPage("home")} />
        )}
        {page === "adminLogin" && (
          <LoginAdmin
            onSuccess={() => {
              setUserType("admin");
              setPage("adminPanel");
            }}
            onBack={() => setPage("home")}
          />
        )}
        {page === "adminPanel" && userType === "admin" && (
          <AdminPanel onLogout={handleLogout} />
        )}
        {page === "teacherLogin" && (
          <LoginTeacher
            onSuccess={() => {
              setUserType("teacher");
              setPage("teacherSection");
            }}
            onBack={() => setPage("home")}
          />
        )}
        {page === "teacherSection" && userType === "teacher" && (
          <TeacherSection onLogout={handleLogout} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
