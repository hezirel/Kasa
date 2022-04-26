import logo from "../assets/logo.svg";
import "../styles/Header.css";
import React from "react";

const Header = () => {
	return (
		<header className="header-main">
			<div className="header-container">
				<img src={logo} alt="logo"/>
				<nav className="header-nav">
					<ul className="header-nav-list">
						<li className="header-nav-item">
							<a href="/" className="header-nav-link">Acceuil</a>
						</li>
						<li className="header-nav-item">
							<a href="housing" className="header-nav-link">A Propos</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;

