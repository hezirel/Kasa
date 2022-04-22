import React from "react";
import PropTypes from "prop-types";

const Feed = ({data}) => {

	return (<ul>
		{data.map(item => <li key={item.id}>{item.title}</li>)}
	</ul>);
};

Feed.propTypes = {
	data: PropTypes.array.isRequired
};

export default Feed;