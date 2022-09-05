import React from "react";
import { PlusLg } from "react-bootstrap-icons";
import { DashLg } from "react-bootstrap-icons";

const ItemCount = ({ stock, onAdd, count, handleCounter }) => {
	return (
		<>
			<div className="counter">
				<button
					className="btn btn--small"
					disabled={count >= stock}
					onClick={() => handleCounter(1)}
				>
					<PlusLg />
				</button>
				<span className="color-light padding-small">{count}</span>
				<button
					className="btn btn--small"
					disabled={count <= 1}
					onClick={() => handleCounter(-1)}
				>
					<DashLg />
				</button>
			</div>
			{onAdd && (
				<button
					className="btn btn--center"
					disabled={stock === 0}
					onClick={() => onAdd(count)}
				>
					Agregar al carrito
				</button>
			)}
		</>
	);
};

export default ItemCount;
