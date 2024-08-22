import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import StudyRoomClassic from "./pages/StudyRoomClassic";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="pt-[4rem] px-7 lg:px-40">
        <Searchbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/study-room-classic" element={<StudyRoomClassic />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
