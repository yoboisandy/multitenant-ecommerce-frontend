import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = ({ url, image }: any) => {
	const navigate = useNavigate();
	return (
		<div
			className="max-w-7xl mx-auto h-full cursor-pointer"
			onClick={() => {
				url && navigate(url);
			}}
		>
			<img
				src={image}
				alt="Banner"
				className="w-full h-full object-cover"
			/>
		</div>
	);
};

export default Banner;
