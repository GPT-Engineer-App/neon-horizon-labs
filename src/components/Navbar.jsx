import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 bg-cyan-500">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white bg-cyan-500 p-2 rounded-md">Home</Link>
        </li>
        <li>
          <Link to="/services" className="text-white bg-cyan-500 p-2 rounded-md">Services</Link>
        </li>
        <li>
          <Link to="/internship" className="text-white bg-cyan-500 p-2 rounded-md">Internship</Link>
        </li>
        <li>
          <Link to="/contact-us" className="text-white bg-cyan-500 p-2 rounded-md">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;