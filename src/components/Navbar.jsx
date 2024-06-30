import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-neon-blue bg-black p-2 rounded-md border border-neon-blue font-montserrat">Home</Link>
        </li>
        <li>
          <Link to="/services" className="text-neon-blue bg-black p-2 rounded-md border border-neon-blue font-montserrat">Services</Link>
        </li>
        <li>
          <Link to="/internship" className="text-neon-blue bg-black p-2 rounded-md border border-neon-blue font-montserrat">Internship</Link>
        </li>
        <li>
          <Link to="/contact-us" className="text-neon-blue bg-black p-2 rounded-md border border-neon-blue font-montserrat">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;