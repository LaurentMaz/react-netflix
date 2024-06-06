import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [myMovies, setMyMovies] = useState([]);
  const docRef = doc(db, "users", `${user?.email}`);

  const getMovies = async () => {
    //Récupération des données en BDD

    try {
      const docSnap = await getDoc(docRef);
      const results = docSnap.data()?.savedMovies;
      setMyMovies(results);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      savedMovies: [],
    });
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  //Effect for authentication state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    if (process.env.NODE_ENV === "production") {
      console.log("Auth state changed:", user); // Log pour déboguer
    }
    return () => {
      unsubscribe();
    };
  }, []);

  // Effect for fetching movies
  useEffect(() => {
    getMovies();

    if (process.env.NODE_ENV === "production") {
      console.log("Fetching movies for user:", user); // Log pour déboguer
    }
  }, [user]); // Depend on user state to refetch movies when user changes

  return (
    <AuthContext.Provider
      value={{
        signUp,
        user,
        myMovies,
        setMyMovies,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
