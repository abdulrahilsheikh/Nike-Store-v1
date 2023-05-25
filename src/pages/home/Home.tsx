import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardSection from "../../components/card-section/CardSection";
import HomepageTextSection from "../../components/homepage-textsection/HomepageTextSection";
import HomepageCarousel from "../../components/homepageCarousel/HomepageCarousel";

type Props = {};

const Home = ({}: Props) => {
	return (
		<>
			<div className="flex flex-col items-center">
				<HomepageCarousel />
				<HomepageTextSection />
				<CardSection />
			</div>
		</>
	);
};

export default Home;
