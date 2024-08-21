import { createContext } from "react";
import { products } from "../assets/assets";
import PropTypes from "prop-types";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "£";

  const value = {
    products,
    currency,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ShopContextProvider;
