import React from "react";
import ItemListContainer from "../components/ItemListContainer";

const Products = () => {
	return (
		<>
			<main className="main padding-bottom">
				<div className="container">
					<h2 className="title padding">Compra todo lo que quieras</h2>
					<ItemListContainer />
				</div>
			</main>
		</>
	);
};

export default Products;
