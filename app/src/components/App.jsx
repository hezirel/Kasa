import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Feed from "./Feed";
// import Banner from "./Banner";
// import banner from "../assets/homeBanner.svg";

const App = () => {

	const [cache, setCache] = useState({data: []});

	useEffect(() => {
		fetch("../data/data.json").then(res => res.json())
			.then(json => setCache({ data: json }));
	});
	//		#:<Banner source={banner} text={"Chez vous, partout et ailleurs"}/>
	return (<div className="App container flex">

		<Feed data={cache.data} />

	</div>);
		
};

export default App;
