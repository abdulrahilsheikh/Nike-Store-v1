import Wrapper from "../wrapper/Wrapper";

type Props = {};

const HomepageTextSection = ({}: Props) => {
	return (
		<Wrapper className="flex justify-center items-center flex-col gap-4 md:py-20 ">
			<div className="md:text-4xl">
				<span className="text-red-300">"</span>
				The only shoe you'll ever need.
				<span className="text-red-300">"</span>
			</div>
			<div className="text-center md:text-xl text-base font-sans md:w-[60%]">
				The Nike Air Zoom Pegasus 39 is a running shoe that is designed
				to provide a comfortable and responsive ride.
			</div>
		</Wrapper>
	);
};

export default HomepageTextSection;
