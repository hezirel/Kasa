import React from "react";
import { PropTypes } from "prop-types";

import "./HousingInfo.css";

const HousingInfo = (props) => {

	return (
		<div className="housing-info-container">
			<div className="housing-info-top">
				<h1 className="housing-info-title">{props.title}</h1>
				<p>{props.location}</p>
			</div>
			<div className="housing-info-host">
				<h1 className="housing-info-hostname">{props.host.name.split(" ")[0]}<br/>{props.host.name.split(" ")[1]}</h1>
				<img className="housing-info-hostpic" src={props.host.picture}></img>
			</div>

			<div className="housing-info-pill flex">
				{props.tags.map((tag, index) => <div className="pill center" key={index}>{tag}</div>)}
			</div>
			<div className="housing-info-rating">
				{props.rating}
			</div>


		</div>
	);
};

HousingInfo.propTypes = {
	title: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	tags: PropTypes.array.isRequired,
	rating: PropTypes.string.isRequired,
	host: PropTypes.object.isRequired,
};

export default HousingInfo;