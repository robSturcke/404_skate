import React, { useState, useMemo, createContext, useContext } from 'react';

const ToggleContext = createContext();

function useToggle() {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  return context;
}

function ToggleProvider(props) {
  const [on, setOn] = useState(true);
  const value = useMemo(() => [on, setOn], [on]);

  return <ToggleContext.Provider value={value} {...props} />;
}

export { ToggleProvider, useToggle };
