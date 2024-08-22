import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const CartTotal = () => {
  const { currency, getCartAmount } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between font-medium text-lg text-black">
          <p>total</p>
          <p>
            {currency}
            {getCartAmount()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
