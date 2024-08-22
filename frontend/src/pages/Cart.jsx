import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        tempData.push({
          _id: item,
          quantity: cartItems[item],
        });
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t border-brown pt-20">
      <div className="text-2xl mb-3">
        <Title text1={"your"} text2={"cart"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}
              className="py-4 border-t border-brown text-black grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt="product image"
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>

                  <div className="flex items-center gap-5 mt-2 text-s text-brown">
                    <p>
                      price: {currency}
                      {productData.price}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(item._id, Number(e.target.value))
                }
                className="border border-brown outline-none max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <svg
                onClick={() => updateQuantity(item._id, 0)}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="inline cursor-pointer fill-black hover:fill-brown"
                viewBox="0 0 20 20"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/orders")}
              className="bg-green text-black text-sm my-8 px-8 py-3 active:bg-beige"
            >
              preceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
