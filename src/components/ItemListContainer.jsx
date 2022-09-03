import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
	const onAdd = (quantity) => {
		console.log(quantity);
	};

	return (
		<>
			<h1 className="title">{greeting}</h1>
			<ItemCount initial={1} stock={5} onAdd={onAdd} />
		</>
	);
};

export default ItemListContainer;
