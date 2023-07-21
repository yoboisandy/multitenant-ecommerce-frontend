import React from "react";

const HeroImageText = () => {
	return (
		<div>
			<div
				className={`bg-black relative text-white bg-cover h-full flex justify-center items-center text-center`}
			>
				<div className="py-[200px] flex flex-col gap-4 z-10 w-[60%]">
					<div className="font-bold text-4xl capitalize">
						An international brand that focuses on making the best
						tools affordable.
					</div>
					<div>Lorem ipsum dolor sit amet.</div>
				</div>
				<img
					src={`https://cdn.blanxer.com/hero_image/63faec89fb0ba7c738538c2c/648160b951c1df3943273a19.png`}
					alt=""
					className="absolute w-full h-full object-cover opacity-40"
				/>
			</div>
		</div>
	);
};

export default HeroImageText;
