import HeroSection from "../../components/LandingPage/HeroSection/HeroSection";
import Navbar from "../../components/LandingPage/Navbar/Navbar";
import OtherSections from "../../components/LandingPage/OtherSections/OtherSections";

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
