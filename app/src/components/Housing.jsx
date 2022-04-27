import React from "react";
import { useLocation } from "react-router-dom";


const Housing = () => {

	const data = useLocation().state.data;
	
	return (
		<div>
			{data.description}
		</div>
	);
};

export default Housing;