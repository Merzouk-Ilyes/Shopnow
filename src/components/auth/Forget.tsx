import React, { useState } from "react";
import "../../styles/Login.css";
import Header from "../home/Header";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword } from "../../services/auth_services";
function Forget() {
  const [email, setEmail] = useState("");
  let navigate = useNavigate();


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
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="login_form_box_label">Email</label>
            </div>

            <div className="login_btn"
                onClick={() => forgotPassword(email, navigate)}
            
            >Reset password</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forget;
