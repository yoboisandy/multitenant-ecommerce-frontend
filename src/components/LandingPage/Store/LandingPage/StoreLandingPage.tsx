import HeroImageText from "../Shared/HeroSections/HeroImageText";
import StoreFrontLayout from "../Shared/Layout/StoreFrontLayout";
import DefaultNav from "../Shared/Navbars/DefaultNav";

const StoreLandingPage = () => {
	return (
		<main className="font-poppins">
			<StoreFrontLayout>
				<DefaultNav />
				<HeroImageText />
			</StoreFrontLayout>
		</main>
	);
};

export default StoreLandingPage;
