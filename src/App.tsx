// @ts-ignore
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Cart from "./components/cart/Cart";
// import Login from "./components/auth/Login"
// import Register from "./components/auth/Register"
// import Forget from "./components/auth/Forget"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="cart" element={<Cart />} /> */}
          {/* <Route path="auth">
            <Route path="" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forget" element={<Forget />} />
          </Route> */}
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
