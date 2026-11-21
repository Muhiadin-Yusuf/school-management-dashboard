import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";
import { navItems } from "./navItems";
import "./Topbar.css";
import React from "react";

export default function Topbar({ onMenuClick }) {
  const location = useLocation();
  const pageName =
    navItems.find((item) => item.to === location.pathname)?.label ||
    "Dashboard";
  return (
    <header className="topbar">
      <button
        className="menu-button"
        onClick={onMenuClick}
        aria-label="Toggle navigation"
      >
        <Menu size={21} />
      </button>
      <div className="breadcrumb">
        Pages <span>/</span> <strong>{pageName}</strong>
      </div>
      <div className="topbar-right">
        <span className="online-dot" />
        <span>Admin Panel</span>
        <div className="top-avatar">SA</div>
      </div>
    </header>
  );
}
