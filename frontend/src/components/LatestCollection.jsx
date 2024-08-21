import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  console.log(products);
  return <div>LatestCollection</div>;
};

export default LatestCollection;
