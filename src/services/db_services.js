import {
  getDocs,
  collection,
  getDoc,
  doc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../App";

export const getAllProducts = async (setProducts) => {
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((product) => {
    setProducts((products) => [...products, product]);
  });
};

export const getDocument = async (collection, docId, setProduct) => {
  const docRef = doc(db, collection, docId);
  const docSnap = await getDoc(docRef);
  console.log(docSnap.data());
  setProduct(docSnap.data());
};

export const addToCart = async (product,quantity,price , size) => {
  const docRef = await addDoc(collection(db, "cart"), {
    title: product.title,
    url: product.url,
    price: price,
    quantity: quantity,
    size: size,
    timestamp: serverTimestamp(),
  });
};
