import "./StatCard.css";
import React from "react";

export default function StatCard({
  label,
  value,
  icon: Icon,
  tone = "blue",
  detail,
}) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${tone}`}>
        <Icon size={19} />
      </div>
      <div className="stat-copy">
        <span>{label}</span>
        <strong>{value}</strong>
        {detail && <small>{detail}</small>}
      </div>
    </div>
  );
}
