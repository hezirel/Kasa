import React from "react";
import "../styles/About.css";
import aboutText from "../data/texts.json";
import Banner from "./Banner";

const About = () => {

	const toggle = (e) => {
		const show = document.getElementById(e.target.dataset.for);
		show.classList.toggle("show");
	};

	const dropWindow = ({id, text}) => {
		return ( 
			<div className="dropdown" key={id}>
				<div className="dropdown-toggle about-dropdown-toggle flex" data-for={id}
					aria-expanded="false">
					<p data-for={id}>{id.replace(/^\w/, (c) => c.toUpperCase())}</p>
					<button className="dropdown-btn" data-for={id} onClick={e => toggle(e)}>
						<i className="fas fa-chevron-down" data-for={id}></i>
					</button>
				</div>
				<div id={id} className="dropdown-content about-dropdown-content">
					<p>{text}</p>
				</div>
			</div>
		);
	};

	return ( 
		<>
			<Banner source="about" />
			<div className = " dropdown-container about-dropdown-container flex" >
				{aboutText.map(e => dropWindow(e))}
			</div>
		</>
	);
};

export default About;