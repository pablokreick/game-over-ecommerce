import React from "react";

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
					{console.log(product.id)}
					<a href="#" className="btn btn--center ver-mas">
						Ver más
					</a>
				</div>
			</div>
		</article>
	);
};

export default Item;
