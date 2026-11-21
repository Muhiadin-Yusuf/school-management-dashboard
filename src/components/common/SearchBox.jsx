import { Search } from "lucide-react";
import "./SearchBox.css";
import React from "react";

export default function SearchBox({
  value,
  onChange,
  placeholder = "Search...",
}) {
  return (
    <label className="search-box">
      <Search size={17} />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}
