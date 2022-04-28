import React from "react";
import "../styles/About.css";
import aboutText from "../assets/texts.json";

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
					<p data-for={id}>{id}</p>
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
		<div className = " dropdown-container about-dropdown-container flex" >
			{aboutText.map(e => dropWindow(e))}
		</div>
	);
};

export default About;