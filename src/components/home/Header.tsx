import React from "react";
import "../../styles/Home.css";
import MainMenu from "./DropMenu";
import { BsPerson } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

function Header(props: { color: string }) {
  function openNav() {
    let sideNavWidth = document.getElementById("mySidenav");
    if (sideNavWidth) sideNavWidth.style.width = "100vw";

    let searchContainerHidden = document.querySelectorAll<HTMLElement>(
      "search-container-hidden"
    )[0];
    if (searchContainerHidden) searchContainerHidden.style.display = "flex";
  }
  function closeNav() {
    let sideNavWidth = document.getElementById("mySidenav");
    if (sideNavWidth) sideNavWidth.style.width = "0";
    let searchContainerHidden = document.querySelectorAll<HTMLElement>(
      "search-container-hidden"
    )[0];
    if (searchContainerHidden) searchContainerHidden.style.display = "none";
  }
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
          <GrClose className="closebtn" onClick={closeNav} />
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
            <Badge colorScheme='red'>2</Badge>
          </Link>
          {true ? (
            <Menu>
              <MenuButton>
                <Avatar name="MERZOUK ILYES" size="md" />
              </MenuButton>
              <Box color="black">
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <Box color="red">
                    <MenuItem>Logout </MenuItem>
                  </Box>
                </MenuList>
              </Box>
            </Menu>
          ) : (
            <Link to="/login" className="icon-link h-[48px]">
              <BsPerson className="icon person relative text-5xl py-0 px-4" />
            </Link>
          )}

          <HiOutlineMenu className="icon menu" onClick={openNav} />
        </div>
      </div>
    </div>
  );
}

export default Header;