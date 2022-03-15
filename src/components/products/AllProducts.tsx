import {
  Button,
  Center,
  Checkbox,
  CheckboxGroup,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Show,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "../../styles/All.sass";
import Header from "../home/Header";
import men from "../../assets/menn.png";

const AllProducts = () => {
  return (
    <>
      <Header color="header_white" />
      <div className="all ">
        <Show breakpoint="(min-width: 800px)">
          <div className="left ">
            <TypeFilter></TypeFilter>
            <RangeFilter></RangeFilter>
            <SizeFilter></SizeFilter>
          </div>
        </Show>
        <div className="main-content">
          <div className="filters ">
            <p>Men's tops (130)</p>
            <Show breakpoint="(max-width: 800px)">
              <FiltersDrawer></FiltersDrawer>
            </Show>
            <Show breakpoint="(min-width: 800px)">
              <SortFilter></SortFilter>
            </Show>
          </div>
          <div className="cards">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </div>
    </>
  );
};

const Card = () => {
  return (
    <div className="card ">
      <img src={men} alt="" />
      <p className="title">T-Shirt Summer Vibes</p>
      <p className="price">$89.99</p>
    </div>
  );
};

const FiltersDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);
  return (
    <>
      <Button colorScheme="orange" onClick={onOpen}>
        filters
      </Button>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody  className="">
            <TypeFilter></TypeFilter>
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <RangeFilter></RangeFilter>
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <SizeFilter></SizeFilter>
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <SortFilter></SortFilter>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const TypeFilter = () => {
  return (
    <div className="product-type">
      <p>Product type</p>
      <CheckboxGroup defaultValue={[]}>
        <Stack spacing={[1, 4]} direction={["column"]}>
          <Checkbox value="type1" colorScheme="orange" size="lg">
            type1
          </Checkbox>
          <Checkbox value="type2" colorScheme="orange" size="lg">
            type2
          </Checkbox>
          <Checkbox value="type3" colorScheme="orange" size="lg">
            type3
          </Checkbox>
          <Checkbox value="type4" colorScheme="orange" size="lg">
            type4
          </Checkbox>
        </Stack>
      </CheckboxGroup>
    </div>
  );
};

const RangeFilter = () => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);
  return (
    <div className="range">
      <p>Price</p>
      <RangeSlider
        defaultValue={[0, 100]}
        aria-label={["min", "max"]}
        onChangeEnd={(val) => setPriceRange(val)}
        colorScheme="orange"
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <p>
        ${priceRange[0]} - ${priceRange[1]}
      </p>
    </div>
  );
};

const SizeFilter = () => {
  return (
    <div className="product-type size">
      <p>Size</p>
      <CheckboxGroup defaultValue={[]}>
        <Stack spacing={[1, 4]} direction={["row"]}>
          
          <Checkbox value="S" colorScheme="orange" size="lg">
            S
          </Checkbox>
          <Checkbox value="M" colorScheme="orange" size="lg">
            M
          </Checkbox>
          <Checkbox value="L" colorScheme="orange" size="lg">
            L
          </Checkbox>
          <Checkbox value="XL" colorScheme="orange" size="lg">
            XL
          </Checkbox>
        </Stack>
      </CheckboxGroup>
    </div>
  );
};
const SortFilter = () => {
  return (
    <div className="filters-content">
      <p>Sort</p>
      <Select
        className="select"
        bg="white"
        borderColor="grey"
        borderRadius="25"
        color="black"
        placeholder="Popular "
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </div>
  );
};

export default AllProducts;
