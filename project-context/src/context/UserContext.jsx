import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const fetchUsers = () => {
      const allUsers = JSON.parse(localStorage.getItem("users") || []);
      const loggedUser = JSON.parse(localStorage.getItem("user") || null);
      const userIsAuthenticated = JSON.parse(
        localStorage.getItem("isAuthenticated") || false
      );
      setUsers(allUsers);
      setUser(loggedUser);
      setIsAuthenticated(userIsAuthenticated);
    };

    fetchUsers();
  }, []);

  const createUser = (newUser) => {
    setUsers([...users, newUser]);
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
  };

  const loginUser = (loggedUser) => {
    setUser(loggedUser);
    localStorage.getItem("user", JSON.stringify(loggedUser));

    setIsAuthenticated(true);
    localStorage.getItem("isAuthenticated", JSON.stringify(true));
  };
  return (
    <UserContext.Provider
      value={{ users, user, setUser, createUser, isAuthenticated, loginUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
