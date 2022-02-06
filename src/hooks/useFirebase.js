import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    //google signIn function
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
              setUser(result.user)
             
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    const logOut = ()=>{
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            // An error happened.
          });
    }

    //observe whether user auth state change or not
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
          }, []);
          
    })
    return{
        user, 
        signInUsingGoogle,
        logOut,
    }

}
export default useFirebase;