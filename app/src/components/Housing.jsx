import React from "react";
import { useLocation } from "react-router-dom";


const Housing = () => {

	const data = useLocation().state.data;
	
	return (
		<div>
			{data.description}
			<ul>
				{data.equipments.map((elt, i) => <li key={i}>{elt}</li>)}
			</ul>
		</div>
	);
};

export default Housing;