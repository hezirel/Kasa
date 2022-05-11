import React, { useEffect, useState } from "react";
import "./App.css";
import Feed from "./Feed";
import Banner from "../common/Banner";

const App = () => {

	const [cache, setCache] = useState({data: []});

	useEffect(() => {
		fetch("data.json", {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			}
		})
			.then(res => res.json())
			.then(json => setCache({ data: json }));
	});

	return (<div className="App container flex">

		<Banner source={"home"}/>
		<Feed data={cache.data} />

	</div>);
		
};

export default App;
