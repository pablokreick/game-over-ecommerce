import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { getProduct } from "../utils/getProduct";
import { useNavigate, useParams } from "react-router-dom";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const { detailId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		getProduct(detailId)
			.then((res) => {
				setProduct(res);
			})
			.catch(() => {
				setError(true);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [detailId]);

	const onClick = () => {
		navigate(-1);
	};

	if (error) {
		return (
			<>
				<ErrorMessage text="No podemos mostrar el producto en este momento" />
				<button className="btn btn--center margin-y" onClick={onClick}>
					Volver atrás
				</button>
			</>
		);
	}

	return <>{loading ? <Loading /> : <ItemDetail product={product} />}</>;
};

export default ItemDetailContainer;
