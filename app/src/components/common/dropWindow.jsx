import React from "react";
import { PropTypes } from "prop-types";
import "./dropWindow.css";

const dropWindow = ({id, text}) => {

	const toggle = (e) => {
		const show = document.getElementById(e.target.dataset.for);
		show.classList.toggle("show");
	};


	//#:Adapter Array || text
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

dropWindow.propTypes = {
	id: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};

export default dropWindow;