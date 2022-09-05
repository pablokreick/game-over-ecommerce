import React, { useEffect, useState } from "react";
import { getProducts } from "../utils/getProducts";
import ErrorMessage from "./ErrorMessage";
import ItemList from "./ItemList";
import Loading from "./Loading";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		getProducts()
			.then((res) => {
				setProducts(res);
			})
			.catch(() => {
				setError(true);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (error) {
		return (
			<ErrorMessage text="No podemos mostrar los productos en este momento" />
		);
	}

	return (
		<>
			{loading ? <Loading /> : <ItemList products={products} />}
			{/* {error && (
				<ErrorMessage text="No podemos mostrar los productos en este momento" />
			)}
			{loading && <Loading />}
			{products.length > 0 && <ItemList products={products} />} */}
			{/* {loading ? (
				<Loading />
			) : products.length > 0 ? (
				<ItemList products={products} />
			) : (
				<ErrorMessage text="No podemos mostrar los productos en este momento" />
			)} */}
		</>
	);
};

export default ItemListContainer;
