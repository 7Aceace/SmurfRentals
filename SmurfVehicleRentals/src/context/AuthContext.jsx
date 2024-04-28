import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { Children, createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/fire";

const UserContext = createContext();

export const  UserAuth = () => {
    return useContext(UserContext);
  };
  
export default function AuthContextProvider({children}) {

    const [isLoggedOut, setIsLogggedOut] = useState(true);
    const [user, setUser] = useState(null);
    
    useEffect (() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
        if (currentUser){
          setIsLogggedOut(false);
          onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
            setUser(doc.data());
          });
          console.log("It ran again");
        } else {
          setIsLogggedOut(true);
        }
      });
      return () => {
        unsubscribe();
      };
    }, []);

  return (
    <UserContext.Provider value ={{
      isLoggedOut,
      user}}>

   {children}

    </UserContext.Provider>
  )
}
