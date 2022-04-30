import React from "react";
import { PropTypes } from "prop-types";

import "./Carousel.css";

const Carousel = ({gallery}) => {

	return (
		<div className="carousel-container">
			<i className="fas fa-chevron-left arrow-left flex center"></i>
			<i className="fas fa-chevron-right arrow-right flex center"></i>
			<div className="carousel flex">
				{gallery.map((media, index) => <img className="carousel-img" src={media} key={index}></img>) };
			</div>
		</div>
	);
};

Carousel.propTypes = {
	gallery: PropTypes.array.isRequired
};

export default Carousel;