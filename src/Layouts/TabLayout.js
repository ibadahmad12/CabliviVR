import React from "react";
import Tab from "../Components/TabControls";
import "./styles.scss";

const TabLayout = ({ children }) => {
  return (
    <div className="tab-layout-container">
      <Tab />
      {children}
    </div>
  );
};

export default TabLayout;
