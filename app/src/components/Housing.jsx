import React from "react";
import { PropTypes } from "prop-types";
import { useLocation } from "react-router-dom";


const Housing = () => {

	const data = useLocation()?.state.data;
	
	return (
		<div>
			{data.description}
		</div>
	);
};

Housing.propTypes = {
	state: PropTypes.object
};

export default Housing;