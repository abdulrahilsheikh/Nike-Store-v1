import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardSection from "../../components/card-section/CardSection";
import HomepageCarousel from "../../components/homepageCarousel/HomepageCarousel";
import HomepageTextSection from "../../components/homepage-textsection/HomepageTextSection";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";

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
