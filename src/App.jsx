import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Students from "./pages/Students";
import Finance from "./pages/Finance";
import Staff from "./pages/Staff";
import Registration from "./pages/Registration";
import {
  initialClasses,
  initialFees,
  initialStaff,
  initialStudents,
} from "./data/initialData";
import "./styles/app-layout.css";

export default function App() {
  const [staff, setStaff] = useState(initialStaff);
  const [classes, setClasses] = useState(initialClasses);
  const [fees, setFees] = useState(initialFees);
  const [students, setStudents] = useState(initialStudents);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const registerStudent = (student) => {
    setStudents((old) => [
      ...old,
      { ...student, id: Date.now(), status: "Active" },
    ]);
  };

  return (
    <div className="app-shell">
      <Sidebar open={sidebarOpen} onNavigate={() => setSidebarOpen(false)} />
      {sidebarOpen && (
        <button
          className="mobile-scrim"
          aria-label="Close navigation"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <main className="main-area">
        <Topbar onMenuClick={() => setSidebarOpen((value) => !value)} />
        <div className="page-content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  students={students}
                  classes={classes}
                  staff={staff}
                  fees={fees}
                />
              }
            />
            <Route
              path="/classes"
              element={<Classes classes={classes} setClasses={setClasses} />}
            />
            <Route
              path="/students"
              element={
                <Students students={students} setStudents={setStudents} />
              }
            />
            <Route
              path="/finance"
              element={<Finance fees={fees} setFees={setFees} />}
            />
            <Route
              path="/staff"
              element={<Staff staff={staff} setStaff={setStaff} />}
            />
            <Route
              path="/registration"
              element={<Registration onRegister={registerStudent} />}
            />
            <Route
              path="*"
              element={
                <Home
                  students={students}
                  classes={classes}
                  staff={staff}
                  fees={fees}
                />
              }
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}
