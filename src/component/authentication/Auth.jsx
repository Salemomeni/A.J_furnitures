// import React, { Children, useContext, useState } from 'react'
// import { createContext   } from "react";

// const AuthContext = createContext(null)
// const Auth = ({children}) => {
//     const [user , setUser] = useState(null)

//     const login = (user) => {
//         setUser(user)
//     }
//     const logout = () =>{
//         setUser(null )
//     }
//   return <AuthContext.Provider value={{user , login , logout}}>{children}</AuthContext.Provider>
// }

// export default Auth


// export const useAuth = () => {
//     return useContext(AuthContext)
// } 