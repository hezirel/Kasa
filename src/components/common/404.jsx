import React from "react";
import { Link } from "react-router-dom";
import "./404.css";


const NotFound = () => {
	return (
		<div className="App divError">
			<h3>404</h3>
			<p>Oups ! La page que vous demandez n&apos;existe pas</p>
			<Link to="/">
			Retourner sur la page d’accueil
			</Link>
		</div>
	);
};

export default NotFound;