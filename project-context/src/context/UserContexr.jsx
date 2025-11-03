import { createContext, useState } from "react";
export const UserContext = createContext();
export const UserContextProvider = ({children}) =>{

    const[users, setUsers] = useState([])
    const[user, setUser] = useState(null)

    return(
        <UserContext.Provider value={{users, user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}