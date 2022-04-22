import logo from "../assets/logo.svg";
import React from "react";
import "../styles/App.css";
import Feed from "./Feed";

const App = () => {

	const getData = async () => {
		let res = await fetch("../data.json");
		res = await res.json();
		return res;
	};

	let cache = getData();

	return (
		<div className="App">
			<img src={logo} className="App-logo" alt="logo" />
			<Feed data={cache} />
		</div>
	);
};

export default App;
