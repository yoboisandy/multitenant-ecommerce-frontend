import { Link } from "react-router-dom";
import { PrimaryButton } from "../../../Shared/Buttons/Buttons";

const HeroSection = () => {
	return (
		<section className="flex flex-col py-10 gap-4 justify-center text-center items-center">
			<div className="md:text-3xl text-xl font-bold flex flex-col gap-4">
				<div className="md:text-2xl text-lg">
					Welcome to <span>MECOMM</span>
				</div>
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
					<Link to="/register">
						<PrimaryButton className={`rounded-full`}>
							Create Store
						</PrimaryButton>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
