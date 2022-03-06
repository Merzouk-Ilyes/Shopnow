import { Home } from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Cart from "./components/cart/Cart";
import Login from "./components/auth/Login";
import Forget from "./components/auth/Forget";
import { useDispatch } from "react-redux";

function App() {
  let authToken = sessionStorage.getItem("UID");
  const dispatch = useDispatch();
  if (authToken) {
    dispatch({ type: "setLogin" });
  } else {
    dispatch({ type: "setLogout" });
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="cart" element={<Cart />} /> */}
          <Route path="login" element={<Login title="Login" type="login" />} />
          <Route
            path="register"
            element={<Login title="Register" type="register" />}
          />
          <Route path="forget" element={<Forget />} />

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
