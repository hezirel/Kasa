import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Feed from "./Feed";

const App = () => {

	const [cache, setCache] = useState({data: []});

	useEffect(() => {
		fetch("../data.json").then(res => res.json())
			.then(json => setCache({ data: json }));
	});

	return (<div className="App container flex">
		<Feed data={cache.data} />
	</div>);
		
};

export default App;
