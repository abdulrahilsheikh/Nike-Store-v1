import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as productJson from "../../assets/productsList.json";
import { IProductSchema } from "../../pages/product/Product";
import { ProductCard } from "../product-card/ProductCard";
import Wrapper from "../wrapper/Wrapper";
function CardSection() {
	const [productList, setProductList] = useState<IProductSchema[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		setProductList(productJson.data);
	}, []);
	return (
		<Wrapper className="flex justify-center items-center">
			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-5">
				{productList.map((item) => (
					<ProductCard
						{...item}
						onClick={() => navigate(`/product/${item.id}`)}
					/>
				))}
			</div>
		</Wrapper>
	);
}

export default CardSection;
