import { Home } from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Checkout from "./components/cart/Checkout";
import Login from "./components/auth/Login";
import Forget from "./components/auth/Forget";
import { useDispatch } from "react-redux";
import { actions } from "./services/store";
import { ToastContainer } from "react-toastify";
import { firebaseConfig } from "./firebase.ts";
import { initializeApp } from "firebase/app";
import AllProducts from "./components/products/AllProducts";
import { getFirestore } from "firebase/firestore";
import Product from "./components/products/Product.jsx";

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

function App() {
  let authToken = sessionStorage.getItem("UID");
  const dispatch = useDispatch();
  if (authToken) {
    dispatch(actions.setLogin(true));
  } else {
    dispatch(actions.setLogin(false));
  }

  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login title="Login" type="login" />} />
          <Route
            path="register"
            element={<Login title="Register" type="register" />}
          />
          <Route path="forget" element={<Forget />} />
          <Route path="all" element={<AllProducts />} />
          <Route path="product" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route
            path="*"
            element={
              <main style={{ padding: "3rem" }}>
                <p>There's nothing here , Leave me alone !</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
