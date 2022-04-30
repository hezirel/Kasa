import { React } from "react";
import { PropTypes } from "prop-types";

import "./Housing.css";

import Carousel from "./Carousel";
import HousingInfo from "./HousingInfo";
import dropWindow from "../common/dropWindow";

const Housing = ({data}) => {

	return (
		<>	
			<Carousel gallery={data.pictures}/>
			<HousingInfo {...data}/>
			<div className="dropdown-container flex">
				{dropWindow({id: "description", text: [...data.description]})}
				{dropWindow({id: "equipements", text: data.equipments})}
			</div>
		</>
	);
};

Housing.propTypes = {
	data: PropTypes.object.isRequired
};

export default Housing;