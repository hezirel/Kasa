import React from "react";
import { PropTypes } from "prop-types";
import "./dropWindow.css";

const dropWindow = ({id, text}) => {

	const toggle = (e) => {
		const show = document.getElementById(e.target.dataset.for);
		show.classList.toggle("show");
	};


	return ( 
		<div className="dropdown" key={id}>
			<div className="dropdown-toggle about-dropdown-toggle flex" data-for={id}
				aria-expanded="false">
				<h2 data-for={id}>{id.replace(/^\w/, (c) => c.toUpperCase())}</h2>
				<button className="dropdown-btn" data-for={id} onClick={e => toggle(e)}>
					<i className="fas fa-chevron-down" data-for={id}></i>
				</button>
			</div>
			<div id={id} className="dropdown-content about-dropdown-content">
				{typeof text === "string" ? <p>{text}</p> : text.map(item => <p key={item}>{item}</p>)}
			</div>
		</div>
	);
};

//#:Foreach
dropWindow.propTypes = {
	id: PropTypes.string.isRequired,
	text: PropTypes.array.isRequired
};

export default dropWindow;