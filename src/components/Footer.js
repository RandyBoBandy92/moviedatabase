import { FaCopyright, FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to="/settings">Settings</Link>
      <span class="copyright">
        <FaRegCopyright />
        <p>{new Date().getFullYear()} Elongated Muskrat Inc.</p>
      </span>
    </footer>
  );
};

export default Footer;
