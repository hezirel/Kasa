import { React } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Housing from "./Housing";


const HousingWrapper = () => {

	let data = useLocation()?.state?.data;

	return (
		data ? (<Housing data={data}/>) : (<Navigate to="/" />)
	);
};

export default HousingWrapper;