import React, { useState } from "react";
import "../../styles/Login.css";
import Header from "../home/Header";
import { FaFacebookF } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { authHandler,logoutHandler } from "../../services/services";
import { eyeTogglerOne, eyeTogglerTwo } from "../../services/helpers";
import { ToastContainer } from "react-toastify";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

export type loginProps = {
  title: string;
  type: "login" | "register";
};
function Login(props: loginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const dispatch = useDispatch();

    
  return (
    <div className="login">
      <Header color="header_white" />
      <Link to="/">
        <div className="back_link">
          <BsArrowLeft />
          <p> Back to store</p>
          
        </div>
      </Link>
      <div
        className="login_container h-[75vh] flex justify-center
      text-center
      items-center"
      >
        <div className="login_content h-[70vh] w-[450px]">
        <ToastContainer 
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/> 
          <p className="login_title text-center ">{props.title }</p>
          <div className="login_form">
            <div className="login_form_box">
              <input
                type="email"
                id="email"
                className="login_form_box_input"
                placeholder=" "
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="login_form_box_label">Email</label>
            </div>
            <div className="login_form_box">
              <input
                type="password"
                id="password"
                className="login_form_box_input"
                placeholder=" "
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="login_form_box_label">Password</label>
              <AiOutlineEye
                className="eye_icon"
                onClick={() => eyeTogglerOne}
              />
              <AiOutlineEyeInvisible
                className="eye_icon"
                onClick={() => eyeTogglerTwo}
              />
            </div>
            <Link to="/forget">
              {" "}
              {props.type === "login" ? (
                <p className="login_forgot_link mr-6">Forgot password?</p>
              ) : (
                ""
              )}
            </Link>
            {props.type === "login" ? (
              <div className="login_socials_btns">
                <div className="login_btn  login_facebook_btn">
                  <FaFacebookF className="social_icon facebook_icon" />
                  Facebook
                </div>
                <div className="login_btn  login_gmail_btn">
                  <SiGmail className="social_icon gmail_icon" />
                  Gmail
                </div>
              </div>
            ) : (
              ""
            )}

            {props.type === "login" ? (
              <button
                className="login_btn"
                onClick={() => authHandler(email, password, props, navigate,dispatch)}
              >
                Sign in
              </button>
            ) : (
              <button
                className="login_btn"
                onClick={() => authHandler(email, password, props, navigate,dispatch)}
              >
                Sign up
              </button>
            )}

            <div className="bottom_links">
              {props.type === "login" ? (
                <Link to="/register" className="flex justify-between ">
                  <p className="not_member mr-10"> Not a member yet ?</p>
                  <p className="sign_up">Sign up</p>
                </Link>
              ) : (
                <Link to="/login">
                  <p className="not_member"> Are you already a member?</p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
