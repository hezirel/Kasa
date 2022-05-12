import { React } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import Housing from "./Housing";


const HousingWrapper = () => {

	let data = useLocation()?.state;

	return (
		data?.id === useParams()?.id ? (<Housing data={data}/>) : (<Navigate to="/404" />)
	);
};

export default HousingWrapper;