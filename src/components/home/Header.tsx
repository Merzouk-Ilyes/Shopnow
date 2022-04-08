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
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Show,
  DrawerCloseButton
} from "@chakra-ui/react";

import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { logoutHandler } from "../../services/auth_services";

function Header(props: { color: string }) {
  const isLogged = useSelector((state: RootStateOrAny) => state.isLogged);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div
      className={`${props.color} header h-[11vh] flex align-start justify-center relative text-white`}
    >
      <div className="container flex justify-between items-center flex-wrap w-[80vw] h-[11vh] ">
        <Link to="/" className="icon-link">
          <div className="logo text-lg font-bold ">Shop Now</div>
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
            <MainMenu genre="w" />
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
        <Drawer onClose={onClose} isOpen={isOpen} size={"sm"}>
          <DrawerOverlay />
          <DrawerContent>
            <Box p="8" >

          <DrawerCloseButton />
            </Box>
            <DrawerHeader>
              <div className="search-container">
                <input
                  type="text"
                  className="search-box "
                  placeholder="Enter the product you are looking for"
                />
                <BiSearchAlt className="search-icon text-[18px]  " />
              </div>
            </DrawerHeader>
            <DrawerBody>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        SHOES
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <div className="accord-links">
                      <a href="/all">Lifestyle</a>
                      <a href="/all">Running</a>
                      <a href="/all">Soccer</a>
                      <a href="/all">Basketball</a>
                      <a href="/all">Baseball</a>
                      <a href="/all">Golf</a>
                      <a href="/all">Football</a>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Clothing
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <div className="accord-links">
                      <a href="/all">Pants</a>
                      <a href="/all"> Hoodies & Sweatshirts</a>
                      <a href="/all">Jackets & Vests</a>
                      <a href="/all">Track Suits</a>
                      <a href="/all">Short Sleeve Shirts</a>
                      <a href="/all">T-Shirts</a>
                      <a href="/all">Jerseys</a>
                      <a href="/all">Shorts</a>
                      <a href="/all">Jeans</a>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Accesorries
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <div className="accord-links">
                      <a href="/all">Glasses</a>
                      <a href="/all">Caps & Hats</a>
                      <a href="/all">Watches</a>
                      <a href="/all">Belts</a>
                      <a href="/all">Bags</a>
                      <a href="/all">Wallets & Cases</a>
                      <a href="/all">Scarves</a>
                      <a href="/all">Glasses</a>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        {/* BURGER MENU END*/}

        <div className="icons h-[11vh] flex relative items-center">
        <Show breakpoint="(min-width: 720px)">
          <div className="search-container">
            <input
              type="text"
              className="search-box "
              placeholder="Enter the product you are looking for"
            />
            <BiSearchAlt className="search-icon text-[18px]  " />
          </div>
          </Show>

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

          <HiOutlineMenu className="icon menu" onClick={onOpen} />
        </div>
      </div>
    </div>
  );
}

export default Header;
