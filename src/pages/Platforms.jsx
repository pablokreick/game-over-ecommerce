import React from "react";
import ItemPlatform from "../components/ItemPlatform";

const platforms = [
	{
		id: 1,
		platform: "PlayStation 4",
	},
	{
		id: 2,
		platform: "PlayStation 5",
	},
	{
		id: 3,
		platform: "Project Scarlett",
	},
	{
		id: 4,
		platform: "Xbox One",
	},
	{
		id: 5,
		platform: "Google Stadia",
	},
	{
		id: 6,
		platform: "Nintendo Switch",
	},
	{
		id: 7,
		platform: "Microsoft Windows",
	},
	{
		id: 8,
		platform: "Amazon Luna",
	},
];

const Platforms = () => {
	return (
		<main className="main padding-bottom">
			<div className="container">
				<h2 className="title padding">Categorias</h2>
				<div className="fondo">
					<div className="padding">
						{platforms.map((platform) => (
							<ItemPlatform key={platform.id} platform={platform} />
						))}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Platforms;
