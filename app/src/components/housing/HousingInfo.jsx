import { React } from "react";
import { PropTypes } from "prop-types";
import "./Housing.css";
import dropWindow from "../common/dropWindow";

const Housing = ({data}) => {

	data ? true : false;
	return (
		<div className="dropdown-container flex">
			{dropWindow({id: "description", text: [...data.description]})}
			{dropWindow({id: "equipements", text: data.equipments})}
		</div>
	);
};

Housing.propTypes = {
	data: PropTypes.object.isRequired
};

export default Housing;