export type ProductCardProps = {
	name: string;
	img: string;
	price: number;
	discount: number;
	onClick?: (data: any) => void;
};

export const ProductCard = ({
	img,
	name,
	price,
	discount,
	onClick,
}: ProductCardProps) => (
	<div
		onClick={onClick}
		className="cursor-pointer group hover:scale-105 transition-all w-80  bg-white shadow-lg rounded-lg">
		<img
			src={`${
				import.meta.env.DEV
					? "../"
					: "https://abdulrahilsheikh.github.io/Nike-Store-v1/assets/"
			}${img}`}
			alt="adidas"
			className="w-full rounded p-0 m-auto h-80 object-cover"
		/>
		<div className=" p-2">
			<div className=" p-2   bg-pink-200/50 rounded-lg bottom-0">
				<p className="text-xl font-bold text-slate-600 ">{name}</p>

				<div className="flex items-center  w-full gap-4 mt-2">
					<p className="text-gray-600 font-semibold">₹{price}</p>
					<p className=" line-through text-gray-600  font-semibold">
						₹{Math.round((100 / (100 - discount)) * price)}
					</p>
					<p className="ml-auto font-semibold text-[#168aad] text-base">
						{discount}% off
					</p>
				</div>
			</div>
		</div>
	</div>
);
