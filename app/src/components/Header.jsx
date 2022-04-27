import logo from "../assets/logo.svg";
import "../styles/Header.css";
import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";

const Header = () => {
	return (
		<header className="header-main">
			<div className="header-container">
				<img src={logo} alt="logo"/>
				<nav className="header-nav">
					<Router>
						<ul className="header-nav-list">
							<li className="header-nav-item">
								<NavLink to="/" className="header-nav-link">Acceuil</NavLink>
							</li>
							<li className="header-nav-item">
								<NavLink to="/about" className="header-nav-link">A propos</NavLink>
							</li>
						</ul>
					</Router>
				</nav>
			</div>
		</header>
	);
};

export default Header;

