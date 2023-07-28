import { useAppSelector } from "../../../../app/hooks";
import StoreFooter from "../Shared/Footer/StoreFooter";
import HeroImageText from "../Shared/HeroSections/HeroImageText";
import Banner from "../Shared/ImageBanners/Banner";
import StoreFrontLayout from "../Shared/Layout/StoreFrontLayout";
import DefaultNav from "../Shared/Navbars/DefaultNav";
import ProductSection from "../Shared/ProductSections/ProductSection";
import ShopByCategory from "../Shared/ShopByCategory/ShopByCategory";
import YoutubePlayer from "../Shared/YoutubePlayer/YoutubePlayer";

const StoreLandingPage = () => {
	const productState: any = useAppSelector((state) => state.ProductSlice);
	const storeState: any = useAppSelector((state) => state.StoreSlice);
	return (
		<main>
			<StoreFrontLayout>
				<div className="space-y-8">
					<HeroImageText />
					<ShopByCategory />
					{storeState?.current_store?.customization?.ad1_image && (
						<Banner
							image={
								storeState.current_store?.customization
									?.ad1_image
							}
							url={
								storeState.current_store.customization?.ad1_url
							}
						/>
					)}
					<ProductSection
						title="New Arrivals"
						products={productState?.newArrivals}
					/>
					{storeState?.current_store?.customization?.ad2_image && (
						<Banner
							image={
								storeState.current_store.customization
									?.ad2_image
							}
							url={
								storeState.current_store.customization?.ad2_url
							}
						/>
					)}
					{productState.trendingProducts?.length > 0 && (
						<ProductSection title="Trending Products" />
					)}
					{storeState.current_store.customization?.youtube_video && (
						<YoutubePlayer
							url={
								storeState.current_store.customization
									?.youtube_video
							}
						/>
					)}
				</div>
			</StoreFrontLayout>
		</main>
	);
};

export default StoreLandingPage;
