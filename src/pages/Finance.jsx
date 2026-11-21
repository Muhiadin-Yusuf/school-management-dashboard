import { useState } from "react";
import React from "react";
import {
  UserCheck,
  Users,
  GraduationCap,
  CircleDollarSign,
  Plus,
  Trash2,
} from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import StatCard from "../components/common/StatCard";
import StatusBadge from "../components/common/StatusBadge";
import "./PageStyles.css";

export default function Finance({ fees, setFees }) {
  const [form, setForm] = useState({
    name: "",
    className: "",
    status: "Paid",
    amount: "",
  });
  const paid = fees.filter((item) => item.status === "Paid");
  const total = paid.reduce((sum, item) => sum + Number(item.amount), 0);
  const submit = (event) => {
    event.preventDefault();
    setFees((old) => [
      ...old,
      { ...form, id: Date.now(), amount: Number(form.amount) },
    ]);
    setForm({ name: "", className: "", status: "Paid", amount: "" });
  };
  return (
    <>
      <PageHeader
        title="Finance Section"
        subtitle="Track student fees and payment records."
      />
      <section className="panel form-panel">
        <h2>Add Student Fee</h2>
        <form className="inline-form" onSubmit={submit}>
          <input
            required
            placeholder="Student Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            required
            placeholder="Class Name"
            value={form.className}
            onChange={(e) => setForm({ ...form, className: e.target.value })}
          />
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option>Paid</option>
            <option>Unpaid</option>
          </select>
          <input
            required
            type="number"
            min="0"
            placeholder="Amount ($)"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
          />
          <button className="success-btn">
            <Plus size={16} /> Add
          </button>
        </form>
      </section>
      <div className="stats-grid finance-stats">
        <StatCard
          label="Paid Students"
          value={paid.length}
          icon={UserCheck}
          tone="green"
        />
        <StatCard
          label="Unpaid Students"
          value={fees.length - paid.length}
          icon={Users}
          tone="red"
        />
        <StatCard
          label="Total Students"
          value={fees.length}
          icon={GraduationCap}
          tone="blue"
        />
        <StatCard
          label="Student Paid"
          value={`$${total}`}
          icon={CircleDollarSign}
          tone="orange"
        />
      </div>
      <section className="panel">
        <div className="panel-heading">
          <h2>Finance List</h2>
          <span className="muted">Student payment records</span>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Class</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <strong>{item.name}</strong>
                  </td>
                  <td>{item.className}</td>
                  <td>
                    <StatusBadge value={item.status} />
                  </td>
                  <td>${Number(item.amount).toLocaleString()}</td>
                  <td>
                    <button
                      className="icon-btn danger"
                      onClick={() =>
                        setFees((old) =>
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
          {!fees.length && (
            <div className="empty-state">No payment records yet.</div>
          )}
        </div>
      </section>
    </>
  );
}
