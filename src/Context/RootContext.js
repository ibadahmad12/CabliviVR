import React, { createContext, useState } from "react";

export var HeadsetContext = createContext({});

export default function RootContext({ children }) {
  const [currentHeadSet, setCurrentHeadset] = useState(null);
  return (
    <HeadsetContext.Provider value={{ currentHeadSet, setCurrentHeadset }}>
      {children}
    </HeadsetContext.Provider>
  );
}
