import "../../styles/Login.css";
import Header from "../home/Header";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

function Register() {
  function eyeTogglerOne(id:string, i:number) {
    document.querySelectorAll<HTMLElement>(".eye_icon")[i].style.display = "none";
    document.querySelectorAll<HTMLElement>(".eye_icon")[i + 1].style.display = "block";
    (document.getElementById(id) as  HTMLInputElement).type = "text";
  }
  function eyeTogglerTwo(id:string, i:number) {
    document.querySelectorAll<HTMLElement>(".eye_icon")[i].style.display = "block";
    document.querySelectorAll<HTMLElement>(".eye_icon")[i + 1].style.display = "none";
    (document.getElementById(id) as  HTMLInputElement).type = "password";
  }
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
      	items-center">
        <div className="login_content h-[70vh] w-[450px]">
          <p className="login_title">
            Create an account and discover the benefits
          </p>
          <div className="login_form">
            <div className="login_form_box">
              <input
                type="text"
                id="first"
                className="login_form_box_input"
                placeholder=" "
              />
              <label className="login_form_box_label">First name</label>
            </div>
            <div className="login_form_box">
              <input
                type="text"
                id="last"
                className="login_form_box_input"
                placeholder=" "
              />
              <label className="login_form_box_label">Last name</label>
            </div>
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
              <AiOutlineEyeInvisible
                className="eye_icon"
                onClick={() => eyeTogglerOne("password", 0)}
              />
              <AiOutlineEye
                className="eye_icon"
                onClick={() => eyeTogglerTwo("password", 0)}
              />
            </div>
            <div className="login_form_box">
              <input
                type="password"
                id="confirm_password"
                className="login_form_box_input"
                placeholder=" "
              />
              <label className="login_form_box_label">Confirm Password</label>
              <AiOutlineEyeInvisible
                className="eye_icon"
                onClick={() => eyeTogglerOne("confirm_password", 2)}
              />
              <AiOutlineEye
                className="eye_icon"
                onClick={() => eyeTogglerTwo("confirm_password", 2)}
              />
            </div>

            <div className="login_btn" style={{ marginTop: "25px" }}>
              Sign up
            </div>
            <Link to="/login">
              <div className="bottom_links">
                <p className="not_member"> Are you already a member?</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
