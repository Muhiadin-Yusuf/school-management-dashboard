import { useState } from "react";
import React from "react";
import { Trash2 } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import SearchBox from "../components/common/SearchBox";
import StatusBadge from "../components/common/StatusBadge";
import "./PageStyles.css";

export default function Students({ students, setStudents }) {
  const [query, setQuery] = useState("");
  const filtered = students.filter((student) =>
    `${student.name} ${student.className} ${student.phone}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  return (
    <>
      <PageHeader
        title="Student Management"
        subtitle="View and manage your registered students."
        action={<span className="count-pill">{students.length} students</span>}
      />
      <section className="panel">
        <div className="toolbar">
          <SearchBox
            value={query}
            onChange={setQuery}
            placeholder="Search by student name, class or phone..."
          />
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Class</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((student) => (
                <tr key={student.id}>
                  <td>
                    <strong>{student.name}</strong>
                  </td>
                  <td>{student.className}</td>
                  <td>{student.gender || "—"}</td>
                  <td>{student.phone || "—"}</td>
                  <td>
                    <StatusBadge value={student.status} />
                  </td>
                  <td>
                    <button
                      className="icon-btn danger"
                      onClick={() =>
                        setStudents((old) =>
                          old.filter((item) => item.id !== student.id),
                        )
                      }
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!filtered.length && (
            <div className="empty-state">No students match your search.</div>
          )}
        </div>
      </section>
    </>
  );
}
