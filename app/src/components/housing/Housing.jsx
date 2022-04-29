import { React } from "react";
import { PropTypes } from "prop-types";

const Housing = ({data}) => {

	return (
		<div> 
			{data.description}
			<ul>
				{data.equipments.map((elt, i) => <li key={i}>{elt}</li>)}
			</ul>
		</div> );
};

Housing.propTypes = {
	data: PropTypes.object.isRequired
};

export default Housing;