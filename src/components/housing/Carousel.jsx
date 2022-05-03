import React from "react";
import { PropTypes } from "prop-types";

import "./Carousel.css";

const Carousel = ({gallery}) => {

	const [activeImage, setActiveImage] = React.useState(0);

	const handleClickMinus = () => {
		setActiveImage(activeImage ? (activeImage - 1) % (gallery.length) : (gallery.length - 1));
	};

	const handleClickPlus = () => {
		setActiveImage((activeImage + 1) % gallery.length);
	};

	return (
		<div className="carousel-container">
			<i className="fas fa-chevron-left arrow-left flex center" onClick={handleClickMinus}></i>
			<i className="fas fa-chevron-right arrow-right flex center" onClick={handleClickPlus}></i>
			<div className="carousel flex">
				{<img className="carousel-img" src={gallery[activeImage]} key={activeImage}></img>}
			</div>
		</div>
	);
};

Carousel.propTypes = {
	gallery: PropTypes.array.isRequired
};

export default Carousel;