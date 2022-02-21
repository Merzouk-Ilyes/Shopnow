import React from "react";
import "../../styles/Login.css";
import Header from "../home/Header";
import { FaFacebookF } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

function Login() {
  function eyeTogglerOne() {
    let eye0 = document.querySelectorAll<HTMLElement>(".eye_icon")[0];
    if (eye0) eye0.style.display = "none";
    let eye1 = document.querySelectorAll<HTMLElement>(".eye_icon")[1];
    if (eye1) eye1.style.display = "block";
    
    let pass = (document.getElementById("password") as  HTMLInputElement)
    if(pass) pass.type = "text";
  }
  function eyeTogglerTwo() {
    let eye0 = document.querySelectorAll<HTMLElement>(".eye_icon")[0];
    if (eye0) eye0.style.display = "block";
    let eye1 = document.querySelectorAll<HTMLElement>(".eye_icon")[1];
    if (eye1) eye1.style.display = "none";
    
    let pass = (document.getElementById("password") as  HTMLInputElement)
    if(pass) pass.type = "password";
  }

  return (
    <div className="login">
      <Header color="header_white" />
      <Link to="/" >
        <div className="back_link">
          <BsArrowLeft />
          <p> Back to store</p>
        </div>
      </Link>
      <div className="login_container h-[75vh] flex justify-center
      text-center
      items-center">
        <div className="login_content h-[70vh] w-[450px]">
          <p className="login_title text-center "> Log in</p>
          <div className="login_form">
            <div className="login_form_box">
              <input
                type="email"
                id="email"
                className="login_form_box_input"
                placeholder=" "
              />
              <label className="login_form_box_label">Email</label>
            </div>
            <div className="login_form_box">
              <input
                type="password"
                id="password"
                className="login_form_box_input"
                placeholder=" "
              />
              <label className="login_form_box_label">Password</label>
              <AiOutlineEye className="eye_icon" onClick={eyeTogglerOne} />
              <AiOutlineEyeInvisible
                className="eye_icon"
                onClick={eyeTogglerTwo}
              />
            </div>
            <Link to="/forget">
              {" "}
              <p className="login_forgot_link mr-6">Forgot password?</p>
            </Link>
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
            <div className="login_btn">Sign in</div>
            <Link to="/register">
              <div className="bottom_links">
                <p className="not_member"> Not a member yet ?</p>
                <p className="sign_up">Sign up</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
