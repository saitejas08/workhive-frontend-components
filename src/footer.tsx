import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLogoApple, IoLogoAndroid } from "react-icons/io5"; // Monochrome icons

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Column 1 */}
        <div className={styles.section}>
          <a href="#">About Us</a>
          <a href="#">Feedback</a>
          <a href="#">Community</a>
        </div>

        {/* Column 2 */}
        <div className={styles.section}>
          <a href="#">Trust, Safety & Security</a>
          <a href="#">Help & Support</a>
          <a href="#">Upwork Foundation</a>
        </div>

        {/* Column 3 */}
        <div className={styles.section}>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">CA Notice at Collection</a>
          <a href="#">Cookie Settings</a>
        </div>

        {/* Column 4 */}
        <div className={styles.section}>
          <a href="#">Accessibility</a>
          <a href="#">Desktop App</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Enterprise Solutions</a>
        </div>
      </div>

      {/* Social & Mobile Icons */}
      <div className={styles.footerBottom}>
        <div className={styles.socialIcons}>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaInstagram /></a>
        </div>

        <div className={styles.mobileIcons}>
          <a href="#"><IoLogoAndroid /></a>
          <a href="#"><IoLogoApple /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        © Workhive.
      </div>
    </footer>
  );
};

export default Footer;
