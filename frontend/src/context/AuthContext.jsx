import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/auth/me", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setIsAuth(data.authenticated))
      .catch(() => setIsAuth(false));
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
