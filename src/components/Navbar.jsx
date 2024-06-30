import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link to="/services" className="text-white">Services</Link>
        </li>
        <li>
          <Link to="/internship" className="text-white">Internship</Link>
        </li>
        <li>
          <Link to="/contact-us" className="text-white">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;