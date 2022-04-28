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
					text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
				}, {
					id: "respect",
					text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
				}, {
					id: "service",
					text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
				}, {
					id: "security",
					text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
				}];

		return ( 
		<div className = " dropdown-container about-dropdown-container flex" > <div/>
		);
};

export default About;