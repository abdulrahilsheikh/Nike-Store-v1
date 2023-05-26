import { Carousel } from "react-responsive-carousel";
import slide1 from "../../assets/slide-1.png";
import slide2 from "../../assets/slide-2.png";
import slide3 from "../../assets/slide-3.png";
import LeftIcon from "../../svgs/leftIcon";
import RightIcon from "../../svgs/rightIcon";

const HomepageCarousel = () => {
	return (
		<div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
			<Carousel
				autoPlay={true}
				infiniteLoop={true}
				showThumbs={false}
				showIndicators={false}
				showStatus={false}
				renderArrowPrev={(clickHandler: any) => (
					<div
						onClick={clickHandler}
						className="absolute right-[31px] md:right-[60px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px]   z-10 flex items-center justify-center cursor-pointer hover:opacity-90">
						<LeftIcon className="text-slate-600/30 " />
					</div>
				)}
				renderArrowNext={(clickHandler: any) => (
					<div
						onClick={clickHandler}
						className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px]  z-10 flex items-center justify-center cursor-pointer hover:opacity-90">
						<RightIcon className="text-slate-600/30" />
					</div>
				)}>
				<div>
					<img
						src={slide1}
						className="aspect-[16/10] md:aspect-auto object-cover"
					/>

					<div className=" md:px-[40px]   md:py-[25px] font-oswald   absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase  cursor-pointer hover:opacity-90 cta-pr-btn px-4 py-2   font-medium bg-indigo-50/50 rounded-lg inline-flex items-center">
						Try it out
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-10 w-10 ml-1 duration-150"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</div>
				</div>

				<div>
					<img
						src={slide2}
						className="aspect-[16/10] md:aspect-auto object-cover"
					/>
					<div className=" md:px-[40px]   md:py-[25px] font-oswald   absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase  cursor-pointer hover:opacity-90 cta-pr-btn px-4 py-2   font-medium bg-indigo-50/50 rounded-lg inline-flex items-center">
						Try it out
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-10 w-10 ml-1 duration-150"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</div>
				</div>

				<div>
					<img
						src={slide3}
						className="aspect-[16/10] md:aspect-auto object-cover"
					/>
					<div className=" md:px-[40px]   md:py-[25px] font-oswald   absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase  cursor-pointer hover:opacity-90 cta-pr-btn px-4 py-2   font-medium bg-indigo-50/50 rounded-lg inline-flex items-center">
						Try it out
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-10 w-10 ml-1 duration-150"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</div>
				</div>
			</Carousel>
		</div>
	);
};

export default HomepageCarousel;
