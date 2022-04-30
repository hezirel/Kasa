import React from "react";
import "./About.css";
import aboutText from "../../data/texts.json";
import Banner from "./Banner";
import DropWindow from "./dropWindow";

const About = () => {

	return ( 
		<div className="about-app-container">
			<Banner />
			<div className = "about-dropdown-container" >
				<div className = "about-narrow" >
					{aboutText.map(e => <DropWindow key={e.id} id={e.id} text={e.text} />)}
				</div>
			</div>
		</div>
	);
};

export default About;