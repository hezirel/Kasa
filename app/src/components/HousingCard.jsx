import PropTypes from "prop-types";
import React from "react";
import "../styles/HousingCard.css";


const HousingCard = ({data}) => {
	return (
		<article className="thumb flex">
			<h2>{data.title}</h2>
		</article>
	);
};

HousingCard.propTypes = {
	data: PropTypes.object.isRequired
};

export default HousingCard;