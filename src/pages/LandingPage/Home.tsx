import HeroSection from "../../components/LandingPage/HomePage/HeroSection/HeroSection";
import Navbar from "../../components/LandingPage/HomePage/Navbar/Navbar";
import OtherSections from "../../components/LandingPage/HomePage/OtherSections/OtherSections";

const Home = () => {
	return (
		<main className="px-20 bg-gray-100 pb-20">
			<Navbar />
			<HeroSection />
			<OtherSections />
		</main>
	);
};

export default Home;
