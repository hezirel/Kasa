import { React } from "react";
import { PropTypes } from "prop-types";

import "./Housing.css";

import Carousel from "./Carousel";
import HousingInfo from "./HousingInfo";
import DropWindow from "../common/dropWindow";

const Housing = ({data}) => {

	return (
		<div className="housing-app-container">	
			<Carousel gallery={data.pictures}/>
			<HousingInfo {...data}/>
			<div className="dropdown-container flex">
				{[{id: "description", text: data.description},
					{id: "equipments", text: data.equipments}].map(e => <DropWindow key={e.id} id={e.id} text={e.text} />)}
			</div>
		</div>
	);
};

Housing.propTypes = {
	data: PropTypes.object.isRequired
};

export default Housing;