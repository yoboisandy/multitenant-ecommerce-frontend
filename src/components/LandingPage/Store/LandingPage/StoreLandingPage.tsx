import HeroImageText from "../Shared/HeroSections/HeroImageText";
import StoreFrontLayout from "../Shared/Layout/StoreFrontLayout";
import DefaultNav from "../Shared/Navbars/DefaultNav";
import ShopByCategory from "../Shared/ShopByCategory/ShopByCategory";

const StoreLandingPage = () => {
	return (
		<main className="font-poppins">
			<StoreFrontLayout>
				<DefaultNav />
				<div className="space-y-10">
					<HeroImageText />
					<ShopByCategory />
				</div>
			</StoreFrontLayout>
		</main>
	);
};

export default StoreLandingPage;
