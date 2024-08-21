import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 py-10 mt-40 text-sm border-t border-brown">
      <div>
        <h1 className="pointer-events-none font-medium text-xl mb-5">
          study café
        </h1>
        <p className="text-sm">copyright {new Date().getFullYear()} @ kqtiiv</p>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">company</p>
        <ul className="flex flex-col gap-1 text-black">
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
        </ul>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">get in touch</p>
        <ul className="flex flex-col gap-1 text-black">
          <li>email: contact@studycafe.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
