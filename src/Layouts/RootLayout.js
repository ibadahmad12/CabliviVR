import React from "react";

const RootLayout = ({ children }) => {
  return (
    <div>
      <img src="/logo.png" alt="logo" className="cablivi-logo" />
      <div className="page-wrappers"> {children}</div>
    </div>
  );
};

export default RootLayout;
