import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
	return (
		<nav className="nav">
			<div className="nav__brand">
				<a className="nav__link" href="/">
					<img
						className="nav__logo"
						src="./media/images/logoGameOver.png"
						alt="logo de Game Over"
					/>
				</a>
			</div>
			<ul className="nav__list">
				<li className="nav__item">
					<a className="nav__link" href="#">
						Productos
					</a>
				</li>
				<li className="nav__item">
					<a className="nav__link" href="#">
						PlayStation 4
					</a>
				</li>
				<li className="nav__item">
					<a className="nav__link" href="#">
						PlayStation 5
					</a>
				</li>
				<li className="nav__item">
					<a className="nav__link" href="#">
						<CartWidget />
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
