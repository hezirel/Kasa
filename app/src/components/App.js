import logo from "../assets/logo.svg";
import React from "react";
import "../styles/App.css";
import Feed from "./Feed";

class App extends React.Component {

	constructor(props) {
		super(props),
		this.state = ({ data: []});
	}

	componentDidMount() {
		fetch("../data.json").then(res => res.json())
			.then(json => this.setState({ data: json }));
	}

	render() {
		return (<div className="App">
			<img src={logo} className="App-logo" alt="logo" />
			<Feed data={this.state.data} />
		</div>);
	}
}

export default App;
