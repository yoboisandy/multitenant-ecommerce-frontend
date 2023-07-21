import StoreFooter from "../Shared/Footer/StoreFooter";
import HeroImageText from "../Shared/HeroSections/HeroImageText";
import Banner from "../Shared/ImageBanners/Banner";
import StoreFrontLayout from "../Shared/Layout/StoreFrontLayout";
import DefaultNav from "../Shared/Navbars/DefaultNav";
import ProductSection from "../Shared/ProductSections/ProductSection";
import ShopByCategory from "../Shared/ShopByCategory/ShopByCategory";
import YoutubePlayer from "../Shared/YoutubePlayer/YoutubePlayer";

const StoreLandingPage = () => {
	return (
		<main>
			<StoreFrontLayout>
				<DefaultNav />
				<div className="space-y-8">
					<HeroImageText />
					<ShopByCategory />
					<Banner />
					<ProductSection title="New Arrivals" />
					<Banner />
					<ProductSection title="Trending Products" />
					<YoutubePlayer url="https://www.youtube.com/embed/lbTMsLHkIho" />
				</div>
				<StoreFooter />
			</StoreFrontLayout>
		</main>
	);
};

export default StoreLandingPage;
