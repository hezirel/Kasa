import React from "react";
import "../styles/Banner.css";
import { PropTypes } from "prop-types";
import homeBanner from "../assets/homeBanner.svg";
import aboutBanner from "../assets/aboutBanner.svg";

const Banner = ({source}) => {

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

Banner.propTypes = {
	source: PropTypes.string.isRequired
};

export default Banner;

