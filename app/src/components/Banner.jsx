import React from "react";
import "../styles/Banner.css";
import { PropTypes } from "prop-types";

const Banner = ({text}) => {

	return (
		<div className="banner-main">	
			<div className="banner-text">
				<p>{text}</p>
			</div>
		</div>
	);
};

Banner.propTypes = {
	text: PropTypes.string
};

export default Banner;

