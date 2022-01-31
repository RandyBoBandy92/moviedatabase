import { FaCopyright, FaFacebook, FaInstagram, FaRegCopyright, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../GlobalState";
import SettingsPage from "../pages/SettingsPage";
import { useState } from "react";

const Footer = () => {
  const { settings, toggleSetting } = useContext(GlobalContext);

  const checked = settings.nicCageMode ? "checked" : "";

  return (
    <footer>
      {/* <Link to="/settings">Settings</Link> */}
      <SettingsPage />
      <div className="socials">
        <FaFacebook className="social-icon"/>
        <FaTwitter className="social-icon"/>
        <FaInstagram className="social-icon"/>
      </div>
      <span className="copyright">
        <FaRegCopyright />
        <p>{new Date().getFullYear()} Elongated Muskrat Inc.</p>
      </span>
    </footer>
  );
};

export default Footer;
