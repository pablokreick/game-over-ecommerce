import React from "react";
import { Link } from "react-router-dom";
const ItemPlatform = ({ platform }) => {
	return (
		<div className="producto borde fondo padding margin-y">
			<Link to="/">
				<h2 className="title title--small">{platform.platform}</h2>
			</Link>
		</div>
	);
};

export default ItemPlatform;
