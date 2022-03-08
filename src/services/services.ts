// import { db } from "../firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { loginProps } from "../components/auth/Login";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { actions } from "./store";

// const usersRef = collection(db, "users");
export const logoutHandler = (navigate: any, dispatch: any) => {
  sessionStorage.removeItem("UID");
  navigate("/");
  // dispatch({type: "setLogout"})
  dispatch(actions.setLogin(false));
  toast.success("Logged out successfully !");
};
export const authHandler = (
  email: string,
  password: any,
  props: loginProps,
  navigate: any,
  dispatch: any
) => {
  const auth = getAuth();
  if (props.type === "register") {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Account created successfully !");
        //@ts-ignore
        // let token =userCredential._tokenResponse.refreshToken
        let UID = response.user.uid;
        setTimeout(() => {
          navigate("/");
        }, 3000);

        sessionStorage.setItem("UID", UID);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email Already in Use");
        }
        if (error.code === "auth/weak-password") {
          toast.error("Password should be at least 6 characters");
        }
      });
  } else {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        toast.success("Login successful !");
        //@ts-ignore
        let UID = response.user.uid;
        setTimeout(() => {
          navigate("/");
        }, 3000);
        sessionStorage.setItem("UID", UID);
        // dispatch({type: "setLogin"})
        dispatch(actions.setLogin(true));
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/wrong-password") {
          toast.error("Please check the Password");
        }
        if (error.code === "auth/user-not-found") {
          toast.error("Please check the Email");
        }
      });
  }
};

export const googleAuth = (dispatch: any,navigate:any) => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential ?  credential.accessToken : "";
      // The signed-in user info.
      const user = result.user;
      toast.success("Login successful !");

      console.log(user)
      let UID = user.uid
      setTimeout(() => {
        navigate("/");
      }, 3000);
      sessionStorage.setItem("UID", UID);

      dispatch(actions.setLogin(true));

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
