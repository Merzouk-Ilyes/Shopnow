import {
  getDocs,
  collection,
  getDoc,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../App";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getAllProducts = async (setProducts) => {
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((product) => {
    setProducts((products) => [...products, product]);
  });
};

export const getDocument = async (collection, docId, setProduct) => {
  const docRef = doc(db, collection, docId);
  const docSnap = await getDoc(docRef);
  let data = docSnap.data();
  data.id = docSnap.id;
  setProduct(data);
};

export const addToCart = async (product, quantity, price, size, UID) => {
  if (!UID) {
    toast.warning("You are not logged in !");
    return;
  }

  const docRef = await setDoc(
    doc(db, "carts", UID, "cart", product.id),
    {
      title: product.title,
      url: product.url,
      price: price,
      quantity: quantity,
      size: size,
      id: product.id,
      timestamp: serverTimestamp(),
    }
  );
  toast.success("Item added to cart");
};
