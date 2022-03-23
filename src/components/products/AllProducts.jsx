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
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "../../styles/All.sass";
import Header from "../home/Header";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../services/db_services.js";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    setProducts([]);
    getAllProducts(setProducts);
  }, []);
  // console.log(products);
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
            {products.length == 0 ? (
              <Spinner />
            ) : (
              products.map((product) => {
                return (
             <Link to={'/product?id=' + product.id} key={product.id}>
                  <Card
                    title={product.data().title}
                    saleprice={product.data().saleprice}
                    disprice={product.data().disprice}
                    size={product.data().size}
                    type={product.data().type}
                    url={product.data().url}
                  ></Card>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({ title, saleprice, disprice, url, size, type }) => {
  return (
    <div className="card ">
      <img src={url} alt="image" />
      <p className="title">{title}</p>
      {disprice ? (
        <div className="price">
          <p className="sale-price">{saleprice}$</p>
          <p className="dis-price">{disprice}$</p>
        </div>
      ) : (
        <p className="normal-price">{saleprice}$</p>
      )}
    </div>
  );
};

const FiltersDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [priceRange, setPriceRange] = useState([0, 100]);
  return (
    <>
      <Button colorScheme="orange" onClick={onOpen}>
        filters
      </Button>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody className="">
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
          <Checkbox value="t-shirt" colorScheme="orange" size="lg">
            T-shirt
          </Checkbox>
          <Checkbox value="sweat" colorScheme="orange" size="lg">
            Sweatshirts
          </Checkbox>
          <Checkbox value="tank" colorScheme="orange" size="lg">
            Tank Tops
          </Checkbox>
          <Checkbox value="dress" colorScheme="orange" size="lg">
            Dress shirts
          </Checkbox>
        </Stack>
      </CheckboxGroup>
    </div>
  );
};

const RangeFilter = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);
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
          <Checkbox
            value="S"
            colorScheme="orange"
            size="lg"
            onChange={(e) => console.log(e.target.value)}
          >
            S
          </Checkbox>
          <Checkbox
            value="M"
            colorScheme="orange"
            size="lg"
            onChange={(e) => console.log(e.target.value)}
          >
            M
          </Checkbox>
          <Checkbox
            value="L"
            colorScheme="orange"
            size="lg"
            onChange={(e) => console.log(e.target.value)}
          >
            L
          </Checkbox>
          <Checkbox
            value="XL"
            colorScheme="orange"
            size="lg"
            onChange={(e) =>
              e.target.checked
                ? console.log(e.target.value)
                : console.log("no XL")
            }
          >
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
