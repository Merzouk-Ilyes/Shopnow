import { db } from "../firebase";
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
} from "firebase/auth";
import { loginProps } from "../components/auth/Login";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const usersRef = collection(db, "users");

//  q = async () => {
//   try {
//       const querySnapshot = await getDocs(usersRef)
//       querySnapshot.forEach((doc) => {
//           console.log(`${doc.id} => ${doc.data().name}`);
//         });
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
// }
export const handleLogout = (navigate: any) => {
  sessionStorage.removeItem("Auth_Token");
  navigate("/login");
};
export const authHandler = (
  email: string,
  password: any,
  props: loginProps,
  navigate: any
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
        }, 4500);

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
        }, 4500);
        sessionStorage.setItem("UID", UID);
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
