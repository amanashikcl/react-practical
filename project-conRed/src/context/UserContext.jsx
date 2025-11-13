import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  useEffect(() => {
    const fetchUsers = () => {
      const allUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const loggedUser = JSON.parse(localStorage.getItem("user") || "null");
      const userIsAuthenticated = JSON.parse(
        localStorage.getItem("isAuthenticated") || "false"
      );
      setUsers(allUsers);
      setUser(loggedUser);
      setIsAuthenticated(userIsAuthenticated);
    };

    fetchUsers();
  }, []);

  const createUser = (newUser) => {
    const updated = [...users, newUser];
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
  };

  const loginUser = (loggedUser) => {
    setUser(loggedUser);
    // persist logged user
    localStorage.setItem("user", JSON.stringify(loggedUser));

    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", JSON.stringify(true));
  };

  const changeUserStatus = (userId) => {
    const userIndex = users.findIndex((u) => u.id === userId);
    if (userIndex !== -1) {
      const updated = [...users];
      const current =
      updated[userIndex] = {
        ...updated[userIndex],
        status: !current,
      };
      setUsers(updated);
      localStorage.setItem("users", JSON.stringify(updated));
    }
    if (user?.id === userId) {
      const current = user.status === true || user.status === "true";
      const updatedUser = { ...user, status: !current };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
  };

  const changeUserRole = (userId, newRole) => {
    const updated = users.map((u) =>
      u.id === userId ? { ...u, role: newRole } : u
    );
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));

    if (user?.id === userId) {
      const updatedUser = { ...user, role: newRole };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        user,
        setUser,
        createUser,
        isAuthenticated,
        loginUser,
        changeUserStatus,
        changeUserRole,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
