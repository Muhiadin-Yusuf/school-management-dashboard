import { GraduationCap } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navItems } from "./navItems";
import "./Sidebar.css";
import React from "react";
export default function Sidebar({ open, onNavigate }) {
  return (
    <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
      <div className="brand">
        <GraduationCap size={25} />
        <span>School Portal</span>
      </div>
      <p className="sidebar-caption">MAIN MENU</p>
      <nav>
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={onNavigate}
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <div className="avatar">SA</div>
        <div>
          <strong>School Admin</strong>
          <small>Administrator</small>
        </div>
      </div>
    </aside>
  );
}
