import { IoLogoInstagram } from 'react-icons/io5';
import { AiFillFacebook } from 'react-icons/ai';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';

import './SocialMediaIcons.css';

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icon-container">
      <a href="https://instagram.com/" target="_blank" rel="noreferrer">
        <IoLogoInstagram />
      </a>
      <a href="https://facebook.com/" target="_blank" rel="noreferrer">
        <AiFillFacebook />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noreferrer">
        <FaTwitterSquare />
      </a>
      <a href="https://pintrest.com/" target="_blank" rel="noreferrer">
        <FaPinterest />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
