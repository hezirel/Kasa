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
								<a>
									<NavLink to="/" className="header-nav-link" activeClassName="header-nav-link-active">Acceuil</NavLink>
								</a>
							</li>
							<li className="header-nav-item">
								<a href="/housing" className="header-nav-link">A Propos</a>
							</li>
						</ul>
					</Router>
				</nav>
			</div>
		</header>
	);
};

export default Header;

