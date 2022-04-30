import React from "react";
import "./About.css";
import aboutText from "../../data/texts.json";
import Banner from "./Banner";
import dropWindow from "./dropWindow";

const About = () => {

	return ( 
		<div className="about-app-container">
			<Banner />
			<div className = "about-dropdown-container" >
				<div className = "about-narrow" >
					{aboutText.map(e => dropWindow(e))}
				</div>
			</div>
		</div>
	);
};

export default About;