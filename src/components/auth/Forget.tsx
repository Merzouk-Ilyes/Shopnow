import React from "react";
import "../../styles/Login.css";
import Header from "../home/Header";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
function Forget() {
  return (
    <div className="login">
      <Header color="header_white" />
      <Link to="/">
        <div className="back_link">
          <BsArrowLeft />
          <p> Back to store</p>
        </div>
      </Link>
      <div className="login_container h-[75vh] flex justify-center
      text-center
      items-center">
        <div className="login_content h-[70vh] w-[450px]">
          <p className="login_title">Forgot your password ?</p>
          <div className="login_form">
            <div className="login_form_box">
              <input
                type="email"
                id="email_forget"
                className="login_form_box_input"
                placeholder=" "
              />
              <label className="login_form_box_label">Email</label>
            </div>

            <div className="login_btn">Reset password</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forget;
