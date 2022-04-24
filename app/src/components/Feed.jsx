import React from "react";
import PropTypes from "prop-types";
import "../styles/Feed.css";
import HousingCard from "./HousingCard";

const Feed = ({data}) => {

	return (<div className="grid grid-container">
		{data.map(item => <HousingCard key={item.id} data={item}/>)}
	</div>);
};

Feed.propTypes = {
	data: PropTypes.array.isRequired
};

export default Feed;