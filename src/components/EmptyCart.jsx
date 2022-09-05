import React from "react";
import { EmojiFrownFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const EmptyCart = () => {
	return (
		<div className="padding-bottom">
			<div className="carrito__empty">
				<p>Tu carrito está vacío</p>
				<div className="carrito__emoji">
					<EmojiFrownFill
						style={{
							color: "#FFC857",
							borderRadius: "50%",
							marginLeft: "calc(.5rem + 1vw)",
							boxShadow: "0 0 40px #FFC857",
							fontSize: "calc(1rem + 5vw)",
						}}
					/>
				</div>
			</div>
			<Link to="/products" className="btn btn--center">
				Comprar
			</Link>
		</div>
	);
};

export default EmptyCart;
