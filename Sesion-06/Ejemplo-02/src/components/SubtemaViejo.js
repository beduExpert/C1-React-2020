import React from 'react';
import { withRouter } from 'react-router';

const SubtemaViejo = (props) => {
	const {
		match: {
			params: { subtema }
		}
	} = props;

	return (
		<p>
			{subtema}
		</p>
	);
};

export default withRouter(SubtemaViejo);
