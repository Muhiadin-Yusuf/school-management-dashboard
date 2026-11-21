import {
  BookOpen,
  BriefcaseBusiness,
  CircleDollarSign,
  Users,
} from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import StatCard from "../components/common/StatCard";
import StatusBadge from "../components/common/StatusBadge";
import "./Home.css";
import React from "react";

export default function Home({ students, classes, staff, fees }) {
  const paidFees = fees.filter((fee) => fee.status === "Paid");
  const paidTotal = paidFees.reduce((sum, fee) => sum + Number(fee.amount), 0);
  const paidPercent = fees.length
    ? Math.round((paidFees.length / fees.length) * 100)
    : 0;

  return (
    <>
      <PageHeader
        title="Dashboard Overview"
        subtitle="Welcome back. Here's what's happening at your school today."
      />
      <div className="stats-grid">
        <StatCard
          label="Total Students"
          value={students.length}
          icon={Users}
          tone="blue"
          detail="Registered students"
        />
        <StatCard
          label="Total Classes"
          value={classes.length}
          icon={BookOpen}
          tone="purple"
          detail="Active classes"
        />
        <StatCard
          label="Total Staff"
          value={staff.length}
          icon={BriefcaseBusiness}
          tone="orange"
          detail="School employees"
        />
        <StatCard
          label="Fees Collected"
          value={`$${paidTotal}`}
          icon={CircleDollarSign}
          tone="green"
          detail="Paid student fees"
        />
      </div>
      <div className="home-grid">
        <section className="panel">
          <div className="panel-heading">
            <h2>Recent Students</h2>
            <span className="muted">Latest registrations</span>
          </div>
          <div className="simple-list">
            {students
              .slice(-4)
              .reverse()
              .map((student) => (
                <div className="simple-row" key={student.id}>
                  <div className="person-avatar">
                    {student.name
                      .split(" ")
                      .map((word) => word[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div className="person-info">
                    <strong>{student.name}</strong>
                    <small>{student.className}</small>
                  </div>
                  <StatusBadge value={student.status} />
                </div>
              ))}
            {!students.length && (
              <div className="empty-state">No students registered.</div>
            )}
          </div>
        </section>
        <section className="panel">
          <div className="panel-heading">
            <h2>Fee Summary</h2>
            <span className="muted">Payment status</span>
          </div>
          <div className="fee-summary">
            <div>
              <span>Paid</span>
              <strong className="green-text">{paidFees.length}</strong>
            </div>
            <div>
              <span>Unpaid</span>
              <strong className="red-text">
                {fees.length - paidFees.length}
              </strong>
            </div>
          </div>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${paidPercent}%` }}
            />
          </div>
          <p className="muted small-note">
            {paidPercent}% of recorded fees have been paid.
          </p>
        </section>
      </div>
    </>
  );
}
