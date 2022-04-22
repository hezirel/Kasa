import React from "react";
import PropTypes from "prop-types";

const Feed = ({data}) => {

	console.log(data);
	return (<p>
		{typeof(data)}
	</p>);
};

Feed.propTypes = {
	data: PropTypes.object.isRequired
};

export default Feed;