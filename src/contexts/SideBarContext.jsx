import React, { createContext, useState, useContext } from "react";

// Step 1: Create a Context
const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  // Step 2: State for sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Step 3: Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Providing the context value to its children
  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to consume the context
export const useSidebar = () => useContext(SidebarContext);

export default SidebarProvider;
