import { ProductCard, ProductCardProps } from "../product-card/ProductCard";
import Wrapper from "../wrapper/Wrapper";

const productList: ProductCardProps[] = [
	{
		name: "Air Jordan 1 Mid SE Craft",
		img: "./Air Jordan 1 Mid SE Craft/thumbnail.jpeg",
		price: 16650,
		discount: 20,
	},
	{
		name: " Air Jordan 1 Mid SE",
		img: "./p1 Air Jordan 1 Mid SE/thumbnail.webp",
		price: 14540,
		discount: 28.5,
	},
	{
		name: "Air Jordan XXXVII Low PF",
		img: "./p2 Air Jordan XXXVII Low PF/thumbnail.webp",
		price: 16855,
		discount: 48.15,
	},
	{
		name: "Jordan Why Not .6 PF",
		img: "./p3 Jordan Why Not .6 PF/thumbnail.webp",
		price: 44440,
		discount: 75,
	},
	{
		name: "Jordan Stay Loyal 2",
		img: "./p4 Jordan Stay Loyal 2/thumbnail.webp",
		price: 12750,
		discount: 50,
	},
	{
		name: "Jordan Delta 3 Low",
		img: "./p5 Jordan Delta 3 Low/thumbnail.webp",
		price: 12750,
		discount: 50,
	},
	{
		name: "Air Jordan 13 Retro",
		img: "./p6 Air Jordan 13 Retro/thumbnail.webp",
		price: 12750,
		discount: 50,
	},
	{
		name: "Air Jordan 6 Retro",
		img: "./p7 Air Jordan 6 Retro/thumbnail.webp",
		price: 22750,
		discount: 35.5,
	},
	{
		name: "Air Jordan 1 Retro High OG",
		img: "./p8 Air Jordan 1 Retro High OG/thumbnail.webp",
		price: 18750,
		discount: 45.3,
	},
];
function CardSection() {
	return (
		<Wrapper className="flex justify-center items-center">
			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-5">
				{productList.map((item) => (
					<ProductCard {...item} />
				))}
			</div>
		</Wrapper>
	);
}

export default CardSection;
