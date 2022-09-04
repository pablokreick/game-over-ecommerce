import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
	return (
		<>
			<div className="fondo">
				<div className="productos padding">
					{products.map((product) => (
						<Item key={product.id} product={product} />
					))}
				</div>
			</div>
		</>
	);
};

export default ItemList;
