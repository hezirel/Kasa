import { React } from "react";
import { Navigate, useLocation } from "react-router-dom";


const Housing = () => {

	let data = useLocation().state?.data;

	//#:Compose Housing view with sub components
	return (
		data ? (
			<div>
				{data.description}
				<ul>
					{data.equipments.map((elt, i) => <li key={i}>{elt}</li>)}
				</ul>
			</div> ) : (<Navigate to="/" />)
	);
};

export default Housing;