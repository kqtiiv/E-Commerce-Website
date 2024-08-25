import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div
      className={`fixed flex items-center justify-between py-5 font-medium px-7 lg:px-40 w-full bg-white ${
        visible ? "h-full" : ""
      }`}
    >
      <NavLink to="/">study café</NavLink>
      <ul className="hidden sm:flex gap-5 text-sm">
        <NavLink
          to="/"
          className="flex flex-col items-center gap-1 text-black hover:text-brown"
        >
          <p>home</p>
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 text-black hover:text-brown"
        >
          <p>collection</p>
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 text-black hover:text-brown"
        >
          <p>about</p>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <svg
          onClick={() => setShowSearch(true)}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          className="cursor-pointer fill-black hover:fill-brown"
          viewBox="0 0 18 18"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>

        <div className="group relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            className="cursor-pointer fill-black hover:fill-brown"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
          </svg>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gep-2 w-36 py-3 px-5 bg-beige text-brown rounded">
              <p className="cursor-pointer hover:text-black">orders</p>
              <p className="cursor-pointer hover:text-black">logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="cursor-pointer fill-black hover:fill-brown"
            viewBox="0 0 18 18"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <svg
          onClick={() => setVisible(true)}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          className="cursor-pointer fill-black hover:fill-brown sm:hidden"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>
      {/* sidebar menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-black point">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer fill-black hover:fill-brown hover:text-brown"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
            <p>back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="py-2 pl-12 text-black hover:text-brown"
          >
            <p>home</p>
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className="py-2 pl-12 text-black hover:text-brown"
          >
            <p>collection</p>
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="py-2 pl-12 text-black hover:text-brown"
          >
            <p>about</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
