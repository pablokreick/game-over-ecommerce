import { products } from "./mock_products";

export const getProducts = () => {
	return fetch("data.json").then((res) => res.json());
};
