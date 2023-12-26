import { createContext } from "react";
import { useContext, useState } from "react";

const userAuthContext = createContext();

export function useUserAuth() {
  return useContext(userAuthContext);
}
export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});
    const [logIn, setLogIn] = useState({});
    const [signUp, setSignUp] = useState({});
    const [logOut, setLogOut] = useState({});
    const [googleSignIn, setGoogleSignIn] = useState({});


  
    return (
      <userAuthContext.Provider
        value={{ user, logIn, signUp, logOut, googleSignIn }}
      >
        {children}
      </userAuthContext.Provider>
    );
  }