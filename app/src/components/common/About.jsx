import React from "react";
import "./About.css";
import aboutText from "../../data/texts.json";
import Banner from "./Banner";
import dropWindow from "./dropWindow";

const About = () => {

	return ( 
		<>
			<div className = "dropdown-container" >
				<Banner />
				<div className = "narrow" >
					{aboutText.map(e => dropWindow(e))}
				</div>
			</div>
		</>
	);
};

export default About;