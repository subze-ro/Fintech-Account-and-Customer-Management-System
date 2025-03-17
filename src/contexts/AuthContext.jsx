import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check localStorage for user on initial load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (email, password) => {
    // Dummy authentication logic
    const dummyUser = { email, token: "dummy-token" };
    setUser(dummyUser);
    localStorage.setItem("user", JSON.stringify(dummyUser));
  };

  const signup = (email, password) => {
    // Dummy signup logic
    const dummyUser = { email, token: "dummy-token" };
    setUser(dummyUser);
    localStorage.setItem("user", JSON.stringify(dummyUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);