export const getProducts = () => {
	return fetch("/data.json").then((res) => res.json());
};
