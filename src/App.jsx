import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Detail from "./pages/Detail";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Platforms from "./pages/Platforms";
import "./App.css";

const AppShell = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/platforms" element={<Platforms />} />
				<Route path="/platforms/:platformId" element={<Products />} />
				<Route path="/detail/:detailId" element={<Detail />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppShell;
