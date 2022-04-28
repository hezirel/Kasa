import React from "react";
import "../styles/About.css";

const About = () => {

		const toggle = (e) => {
			const show = document.getElementById(e.target.dataset.for);
			show.classList.toggle("show");
		};

		const dropWindow = (id, text) => {
			return ( 
				<div className="dropdown">
				<div className="dropdown-toggle about-dropdown-toggle flex" data-for={id}
					aria-expanded="false">
					<p data-for={id}>Fiabilité</p>
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

		const aboutText = [{
					id: "reliability",
					text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
					{id: "
					reliability ", text: "
					Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont
					conformes aux logements,
					et toutes les informations sont régulièrement vérifiées par
					nos équipes.
					" }, {id: "
					reliability ", text: "
					Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont
					conformes aux logements,
					et toutes les informations sont régulièrement vérifiées par
					nos équipes.
					" }, {id: "
					reliability ", text: "
					Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont
					conformes aux logements,
					et toutes les informations sont régulièrement vérifiées par
					nos équipes.
					" }];

					return ( <
						div className = " dropdown-container about-dropdown-container flex" >
						<
						/>
					);
				};

				export default About;