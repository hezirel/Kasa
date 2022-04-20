import logo from "../assets/logo.svg";
import React from "react";
import "../styles/App.css";
import cache from "../js/datafetch";

async function App() {
	let data = cache();
	console.log(data);
	return (
		<div className="App">
			<img src={logo} className="App-logo" alt="logo" />
		</div>
	);
}

export default App;
