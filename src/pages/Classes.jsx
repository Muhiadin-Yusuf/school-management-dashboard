import { useState } from "react";
import React from "react";
import { BookOpen, Users, UserCheck, Trash2, Plus } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import StatCard from "../components/common/StatCard";
import StatusBadge from "../components/common/StatusBadge";
import "./PageStyles.css";

export default function Classes({ classes, setClasses }) {
  const [form, setForm] = useState({ name: "", teacher: "", students: "" });
  const submit = (event) => {
    event.preventDefault();
    setClasses((old) => [
      ...old,
      {
        ...form,
        id: Date.now(),
        students: Number(form.students),
        status: "Active",
      },
    ]);
    setForm({ name: "", teacher: "", students: "" });
  };
  return (
    <>
      <PageHeader
        title="Class Management"
        subtitle="Manage school classes easily."
      />
      <div className="stats-grid three">
        <StatCard
          label="Total Classes"
          value={classes.length}
          icon={BookOpen}
          tone="blue"
        />
        <StatCard
          label="Total Students"
          value={classes.reduce((sum, item) => sum + Number(item.students), 0)}
          icon={Users}
          tone="green"
        />
        <StatCard
          label="Teachers"
          value={new Set(classes.map((item) => item.teacher)).size}
          icon={UserCheck}
          tone="orange"
        />
      </div>
      <section className="panel form-panel">
        <h2>Add New Class</h2>
        <form className="inline-form" onSubmit={submit}>
          <input
            required
            placeholder="Class Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            required
            placeholder="Teacher Name"
            value={form.teacher}
            onChange={(e) => setForm({ ...form, teacher: e.target.value })}
          />
          <input
            required
            min="0"
            type="number"
            placeholder="Students Count"
            value={form.students}
            onChange={(e) => setForm({ ...form, students: e.target.value })}
          />
          <button className="primary-btn">
            <Plus size={16} /> Add Class
          </button>
        </form>
      </section>
      <section className="panel">
        <div className="panel-heading">
          <h2>Class List</h2>
          <span className="muted">{classes.length} classes</span>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Teacher</th>
                <th>Students</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((item) => (
                <tr key={item.id}>
                  <td>
                    <strong>{item.name}</strong>
                  </td>
                  <td>{item.teacher}</td>
                  <td>{item.students}</td>
                  <td>
                    <StatusBadge value={item.status} />
                  </td>
                  <td>
                    <button
                      className="icon-btn danger"
                      onClick={() =>
                        setClasses((old) =>
                          old.filter((row) => row.id !== item.id),
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
          {!classes.length && (
            <div className="empty-state">No classes added yet.</div>
          )}
        </div>
      </section>
    </>
  );
}
