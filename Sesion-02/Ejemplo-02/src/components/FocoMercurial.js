import React from 'react';
import LuzMercurial from './LuzMercurial';

const FocoMercurial = (props) => {
	return (
		<div className="focoMercurial">
			<LuzMercurial color={props.color} />
		</div>
	);
};

export default FocoMercurial;
