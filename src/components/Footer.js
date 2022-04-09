import {
  FaFacebook,
  FaInstagram,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";
import SettingsModal from "../pages/SettingsModal";

const Footer = () => {
  return (
    <footer>
      <SettingsModal />
      <div className="socials">
        <FaFacebook className="social-icon" />
        <FaTwitter className="social-icon" />
        <FaInstagram className="social-icon" />
      </div>
      <span className="copyright">
        <FaRegCopyright />
        <p>{new Date().getFullYear()} Elongated Muskrat Inc.</p>
      </span>
    </footer>
  );
};

export default Footer;
