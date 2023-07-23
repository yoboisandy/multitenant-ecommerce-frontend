import React from "react";
import { useAppSelector } from "../../../../../app/hooks";
import {
	DashboardButton,
	StoreFrontButton,
} from "../../../../Shared/Buttons/Buttons";
import { useNavigate } from "react-router-dom";

const HeroImageText = () => {
	const storeState: any = useAppSelector((state) => state.StoreSlice);
	const navigate = useNavigate();
	const isDefault: boolean =
		!storeState.current_store?.customization?.hero_image &&
		!storeState.current_store?.customization?.hero_title &&
		!storeState.current_store?.customization?.hero_subtitle;
	return (
		<div>
			<div
				className={`${
					isDefault ||
					!storeState.current_store?.customization?.hero_image
						? "bg-gray-800"
						: "bg-black"
				} relative text-white bg-cover h-full flex justify-center items-center text-center`}
			>
				<div className="max-w-7xl mx-auto py-[140px] flex flex-col gap-4 z-10 w-[60%]">
					{isDefault && (
						<div className="font-bold text-4xl capitalize">
							Visit Dashboard to Customize Your Store
						</div>
					)}
					<div className="font-bold text-4xl capitalize">
						{storeState.current_store?.customization?.hero_title ||
							""}
					</div>
					<div>
						{storeState.current_store?.customization
							?.hero_subtitle || ""}
					</div>
					{!isDefault &&
						storeState.current_store?.customization
							?.hero_button_text &&
						storeState.current_store?.customization
							?.hero_button_url && (
							<div className="flex justify-center">
								<StoreFrontButton
									className="rounded"
									onClick={() =>
										navigate(
											storeState.current_store
												?.customization?.hero_button_url
										)
									}
								>
									{
										storeState.current_store?.customization
											?.hero_button_text
									}
								</StoreFrontButton>
							</div>
						)}
				</div>
				{storeState.current_store?.customization?.hero_image && (
					<img
						src={
							storeState.current_store?.customization?.hero_image
						}
						alt=""
						className="absolute w-full h-full object-cover opacity-40"
					/>
				)}
			</div>
		</div>
	);
};

export default HeroImageText;
