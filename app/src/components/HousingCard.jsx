import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/HousingCard.css";


const HousingCard = ({data}) => {

	let params = {
		pathname: "/housing",
	};
	
	return (
		<Link to={params} state={{data: data}}>
			<article className="thumb flex">
				<h2>{data.title}</h2>
			</article>
		</Link>
	);
};

HousingCard.propTypes = {
	data: PropTypes.object.isRequired
};

export default HousingCard;