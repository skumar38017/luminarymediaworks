import React from 'react';
import { MdLocationOn, MdPhone } from "react-icons/md";
import facebookIcon from "./assests/facebook.png";
import TwitterIcon from "./assests/twitterpng.png";
import LinkIcon from "./assests/linkdelinpic.png";
import YoutubeIcon from "./assests/youtube.png";
import Instagrampic from "./assests/instagrampic.png";
import PinterestIcon from "./assests/pinterest.png";
import WifiIcon from "./assests/wifi.png";
import locationIcon from "./assests/location.png";
import phone from "./assests/phone.png";
import googleIcon from "./assests/google.png";
import './Footer.css';

const Footer = () => {
    const socialLinks = [
        { name: "Facebook", icon: facebookIcon },
        { name: "Twitter", icon: TwitterIcon },
        { name: "LinkedIn", icon: LinkIcon },
        { name: "YouTube", icon: YoutubeIcon },
        { name: "Instagram", icon: Instagrampic },
        { name: "Pinterest", icon: PinterestIcon },
        { name: "RSS", icon: WifiIcon },
    ];

    const footerLinks = [
        { name: "About us", url: "/about-us" },
        { name: "Contact us", url: "/contact-us" },
        { name: "Help", url: "/help" },
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Disclaimer", url: "/disclaimer" },
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="contact-item">
                        <img
                            src={locationIcon}
                            alt="Location"
                            style={{ width: '20px', height: '20px' }}
                        />
                        <p className="contact-text">Prabhadevi, Mumbai, Maharashtra 400 025</p>
                    </div>
                    <div className="contact-item">
                        <img
                            src={phone}
                            alt="Phone"
                            style={{ width: '20px', height: '20px' }}
                        />
                        <p className="contact-text">91+ 9137384796</p>
                    </div>
                    <div className="social-media-section">
                        <div className="social-media-label">Social Media</div>
                        <div className="social-links">
                            {socialLinks.map((social) => (
                                <img
                                    key={social.name}
                                    src={social.icon}
                                    alt={social.name}
                                    className="social-icon"
                                    style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="heading-container">
                        <img
                            src={googleIcon}
                            alt="brand"
                            className="google-icon"
                        />
                        <h3 className="footer-heading">luminarymediawork.in</h3>
                    </div>
                    <p className="footer-description">
                        At Luminary Media Works, we specialize in high-end cinematography, cutting-edge AI visuals,
                        immersive 360 VR experiences, dynamic motion graphics, and live event productions.
                        Whether you're looking to create a compelling brand film, stunning aerial shots,
                        or a next-level projection mapping experience, we
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-links">
                    {footerLinks.map((link) => (
                        <a key={link.name} href={link.url} className="footer-link">
                            {link.name}
                        </a>
                    ))}
                </div>
                <p className="copyright">Copyright © 2025 •</p>
            </div>
        </footer>
    );
};

export default Footer;