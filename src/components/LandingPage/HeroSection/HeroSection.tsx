import { PrimaryButton } from "../../Shared/Buttons/Buttons";

const HeroSection = () => {
	return (
		<section className="flex flex-col gap-4 justify-center text-center h-[70vh] items-center">
			<div className="text-3xl font-bold flex flex-col gap-4">
				<div className="text-2xl">
					Welcome to <span>ECOMM</span>
				</div>
				{/* create a gradient text color */}

				<div className="bg-gradient-btn text-transparent bg-clip-text animate-gradientText">
					Create and Customize Your Online Store Today
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="md:w-[530px] text-gray-600 text-sm">
					We understand how difficult it is to manage your online
					business. With Ecomm, you'll have all the tools you need to
					run a successful online business.
				</div>
				<div className="flex justify-center">
					<PrimaryButton>Create Store for Free</PrimaryButton>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
