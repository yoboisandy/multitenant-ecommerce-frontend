import HeroSection from "./HeroSection/HeroSection";
import Navbar from "./Navbar/Navbar";
import OtherSections from "./OtherSections/OtherSections";

const Index = () => {
	return (
		<main className="px-20 bg-gray-100 pb-20">
			<Navbar />
			<HeroSection />
			<OtherSections />
		</main>
	);
};

export default Index;
