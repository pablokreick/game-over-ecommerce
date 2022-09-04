import { products } from "./mock_products";

export const getProducts = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(products);
	}, 2000);
});
