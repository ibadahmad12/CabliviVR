import React from "react";
import Tab from "../Components/TabControls";
import "./styles.scss";

export default function TabLayout({ children }) {
  return (
    <div className="tab-layout-container">
      <Tab />
      {children}
    </div>
  );
}
