import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useLocation } from "react-router-dom";

const Searchbar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("collection") && showSearch) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="bg-white text-center">
      <div className="inline-flex items-center justify-center border-none px-5 py-5 mx-3 w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm py-1 px-3 border border-brown rounded-sm"
          type="text"
          placeholder="search"
        />
      </div>
      <svg
        onClick={() => setShowSearch(false)}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        className="inline cursor-pointer fill-black hover:fill-brown"
        viewBox="0 0 20 20"
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
      </svg>
    </div>
  ) : null;
};

export default Searchbar;
