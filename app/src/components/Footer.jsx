import logo from "../assets/logo.svg";
import "../styles/Footer.css";
import React from "react";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				<img src={logo} alt="logo"/>
				<p>© 2022 Kasa. All rights reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
