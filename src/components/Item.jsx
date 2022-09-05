import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
	return (
		<article className="producto borde fondo">
			<div className="producto__contenedor">
				<div className="producto__header">
					<img
						src={product.image}
						className="producto__image"
						alt={product.title}
					/>
				</div>
				<div className="producto__cuerpo">
					<h3>{product.title}</h3>
					<p>{product.price}$</p>
					<Link to={`/detail/${product.id}`} className="btn btn--center">
						Ver más
					</Link>
				</div>
			</div>
		</article>
	);
};

export default Item;
