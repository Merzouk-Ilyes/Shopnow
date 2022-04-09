import {Box, Flex, Divider } from "@chakra-ui/react";
import "../../styles/footer.sass";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <>
      <Divider />
      <div  className="grid">
        <Box w="100%" h="300" className="col-1">
          <h2>Shop now</h2>
          <p>
            House My Brand designs clothing for the young, the old & everyone in
            between – but most importantly, for the fashionable
          </p>
          <Flex className="flex-icons" gap={5}>
            <AiFillInstagram />
            <FaFacebook />
            <AiOutlineTwitter />
            <AiFillYoutube />
            <AiFillLinkedin />
          </Flex>
        </Box>
        <Box w="100%" h="300"  className="col">
          <p>Shopping online</p>
          <li>Order Status</li>
          <li>Shipping and Delivery</li>
          <li>Returns</li>
          <li>Payment Options</li>
          <li>Contact Us</li>
        </Box>
        <Box w="100%" h="300"  className="col">
          <p>Information</p>
          <li>Gift Cards</li>
          <li>Find a store</li>
          <li>Newsletter</li>
          <li>Bacome a member</li>
          <li>Site feedback</li>
        </Box>
        <Box w="100%" h="300"  className="col">
          <p>Contact</p>
          <li>store@shopnow.com</li>
          <li>Hotline: +1 131 138 138</li>
        </Box>
      </div>

      <Divider />

      <p className="footer-bottom">SHOPNOW - © 2022. ALL RIGHTS RESERVED.</p>
    </>
  );
}

export default Footer;
