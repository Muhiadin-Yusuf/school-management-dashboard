import { useState } from "react";
import React from "react";
import {
  BriefcaseBusiness,
  UserCheck,
  Users,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import StatCard from "../components/common/StatCard";
import SearchBox from "../components/common/SearchBox";
import StatusBadge from "../components/common/StatusBadge";
import "./PageStyles.css";

const emptyForm = {
  name: "",
  role: "",
  email: "",
  phone: "",
  status: "Active",
};

export default function Staff({ staff, setStaff }) {
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const filtered = staff.filter((item) =>
    `${item.name} ${item.role} ${item.email} ${item.phone} ${item.status}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  const submit = (event) => {
    event.preventDefault();
    setStaff((old) => [...old, { ...form, id: Date.now() }]);
    setForm(emptyForm);
    setShowForm(false);
  };
  const toggleStatus = (id) =>
    setStaff((old) =>
      old.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "Active" ? "Inactive" : "Active",
            }
          : item,
      ),
    );

  return (
    <>
      <PageHeader
        title="Staff Management"
        subtitle="Manage school staff members."
        action={
          <button
            className="primary-btn"
            onClick={() => setShowForm((value) => !value)}
          >
            <Plus size={16} /> Add Staff
          </button>
        }
      />
      <div className="stats-grid three">
        <StatCard
          label="Total Staff"
          value={staff.length}
          icon={BriefcaseBusiness}
          tone="blue"
        />
        <StatCard
          label="Active Staff"
          value={staff.filter((item) => item.status === "Active").length}
          icon={UserCheck}
          tone="green"
        />
        <StatCard
          label="Inactive Staff"
          value={staff.filter((item) => item.status === "Inactive").length}
          icon={Users}
          tone="red"
        />
      </div>
      {showForm && (
        <section className="panel form-panel">
          <div className="panel-heading">
            <h2>New Staff Member</h2>
            <button className="icon-btn" onClick={() => setShowForm(false)}>
              <X size={18} />
            </button>
          </div>
          <form className="inline-form" onSubmit={submit}>
            <input
              required
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              required
              placeholder="Role"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              placeholder="Phone number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <button className="primary-btn">Save Staff</button>
          </form>
        </section>
      )}
      <section className="panel">
        <div className="toolbar">
          <SearchBox
            value={query}
            onChange={setQuery}
            placeholder="Search by name, role, email, phone or status..."
          />
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id}>
                  <td>
                    <strong>{item.name}</strong>
                  </td>
                  <td>{item.role}</td>
                  <td>{item.email || "—"}</td>
                  <td>{item.phone || "—"}</td>
                  <td>
                    <button
                      className="status-button"
                      onClick={() => toggleStatus(item.id)}
                    >
                      <StatusBadge value={item.status} />
                    </button>
                  </td>
                  <td>
                    <button
                      className="icon-btn danger"
                      onClick={() =>
                        setStaff((old) =>
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
          {!filtered.length && (
            <div className="empty-state">No staff members found.</div>
          )}
        </div>
      </section>
    </>
  );
}
