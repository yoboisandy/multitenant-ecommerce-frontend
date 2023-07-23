import React from "react";
import { useAppSelector } from "../../../../../app/hooks";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
	const storeState: any = useAppSelector((state) => state.StoreSlice);
	const navigate = useNavigate();
	return (
		<p
			className={`${
				storeState.current_store?.customization?.topbar_text
					? "flex"
					: "hidden"
			} h-10 items-center justify-center bg-storeFrontClr px-4 text-sm font-medium text-white sm:px-6 lg:px-8 cursor-pointer`}
			onClick={() =>
				navigate(storeState.current_store?.customization?.topbar_url)
			}
		>
			{storeState.current_store?.customization?.topbar_text}
		</p>
	);
};

export default Topbar;
