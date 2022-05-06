import React from "react";
import "./Banner.css";
import homeBanner from "../../assets/homeBanner.svg";
import aboutBanner from "../../assets/aboutBanner.svg";


const Banner = () => {

	const source = window.location.pathname.split("/").pop();
	const img = ({
		"home": homeBanner,
		"about": aboutBanner
	})[source];

	const text = ({
		"home": "Chez vous, partout et ailleurs",
		"about": ""
	})[source];

	return (
		<>
			<div className="hero-banner">
				<img src={img} alt={text} />
				<h3>{text}</h3>
			</div>
		</>
	);
};

export default Banner;

