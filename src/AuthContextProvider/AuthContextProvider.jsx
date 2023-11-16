import React, { useState, createContext } from "react";

export const AuthContext = createContext();
function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [contectSelsFeedback, setContectSelsFeedback] = useState([]);
  const [Id, setId] = useState(0);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        contectSelsFeedback,
        setContectSelsFeedback,
        Id,
        setId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
