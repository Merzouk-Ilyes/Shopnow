import React from "react";
import "../../styles/Home.css";
import MainMenu from "./DropMenu";
import { BsPerson } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { authHandler, logoutHandler } from "../../services/services";
import { closeNav, openNav } from "../../services/helpers";

function Header(props: { color: string }) {
  const isLogged = useSelector((state: RootStateOrAny) => state.isLogged);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      className={`${props.color} header h-[11vh] flex align-start justify-center relative text-white`}
    >
      <div className="container flex justify-between items-center flex-wrap w-[80vw] h-[11vh] ">
        <Link to="/" className="icon-link">
          <div className="logo text-lg font-bold ">E-Shop</div>
        </Link>
        <ul className="flex h-[11vh] ">
          <li className="flex items-center my-0 mx-6 ">
            <a
              href="#men"
              className="text-sm font-medium tracking-widest transition relative	"
            >
              Men
            </a>
            <MainMenu genre="men" />
          </li>
          <li className="flex items-center my-0 mx-6 ">
            <a
              href="#women"
              className="text-sm font-medium tracking-widest transition relative	"
            >
              Women
            </a>
            <MainMenu genre="women" />
          </li>
          <li className="flex items-center my-0 mx-6 ">
            <a
              href="#kids"
              className="text-sm font-medium tracking-widest transition relative	"
            >
              Kids
            </a>
            <MainMenu genre="kids" />
          </li>
        </ul>

        {/* BURGER MENU */}
        <div id="mySidenav" className="sidenav">
          <GrClose className="closebtn" onClick={() => closeNav(document)} />
          <div className="search-container search-container-hidden">
            <input
              id="search-box"
              type="text"
              className="search-box"
              placeholder="Enter the product you are looking for"
            />
            <BiSearchAlt className="search-icon " />
          </div>
          <a href="#men">Men</a>
          <a href="#women">Women</a>
          <a href="#kids">Kids</a>
        </div>
        {/* BURGER MENU  END*/}

        <div className="icons h-[11vh] flex relative items-center">
          <div className="search-container">
            <input
              type="text"
              className="search-box "
              placeholder="Enter the product you are looking for"
            />
            <BiSearchAlt className="search-icon text-[18px]  " />
          </div>

          <Link to="/cart" className="icon-link  ">
            <RiShoppingCartLine className="icon relative text-[54px] py-0 px-4" />
          </Link>
          {isLogged ? (
            <Menu>
              <MenuButton>
                <Avatar name="MERZOUK ILYES" size="md" />
              </MenuButton>
              <Box color="black">
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <Box color="red">
                    <MenuItem onClick={() => logoutHandler(navigate, dispatch)}>
                      Logout{" "}
                    </MenuItem>
                  </Box>
                </MenuList>
              </Box>
            </Menu>
          ) : (
            <Link to="/login" className="icon-link">
              <BsPerson className="icon  relative text-[54px] py-0 px-4" />
            </Link>
          )}

          <HiOutlineMenu
            className="icon menu"
            onClick={() => openNav(document)}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
