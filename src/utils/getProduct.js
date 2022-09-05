export const getProduct = (id) => {
	return fetch("/data.json")
		.then((res) => res.json())
		.then((products) => {
			const prod = products.find((product) => product.id === +id);
			return prod;
		});
};
