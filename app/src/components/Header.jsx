import logo from "../assets/logo.svg";
import "../styles/Header.css";
import React from "react";

const Header = () => {
	return (
		<header>
			<img src={logo} className="logo" alt="logo" />
		</header>
	);
};

export default Header;

