import React, { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
	const [count, setCount] = useState(1);

	const onAdd = (quantity) => {
		console.log(quantity);
	};

	const handleCounter = (quantity) => {
		setCount(count + quantity);
	};

	return (
		<>
			<div className="detail borde borde--violeta padding fondo">
				<img src={product.image} alt={product.title} />
				<div className="detail-list-container">
					<ul>
						<li>
							<span className="color-complementary">Nombre:</span>
							{product.title}
						</li>
						{product.serie && (
							<li>
								<span className="color-complementary">Serie:</span>
								{product.serie}
							</li>
						)}
						<li>
							<span className="color-complementary">Desarrolladores:</span>
							{product.developers}
						</li>
						<li>
							<span className="color-complementary">Distribuidores:</span>
							{product.distributors}
						</li>
						<li>
							<span className="color-complementary">Modo:</span> {product.mode}
						</li>
						<li>
							<span className="color-complementary">Plataformas:</span>
							{product?.platforms?.toString().replaceAll(",", ", ")}
						</li>
						<li>
							<span className="color-complementary">Precio:</span> $
							{product.price}
						</li>
						<li>
							<span className="color-complementary">Fecha:</span> {product.date}
						</li>
						<li>últimas 3 unidades</li>
					</ul>
				</div>

				<div className="detail-counter">
					<ItemCount
						stock={3}
						onAdd={onAdd}
						handleCounter={handleCounter}
						count={count}
					/>
				</div>
			</div>
		</>
	);
};

export default ItemDetail;
