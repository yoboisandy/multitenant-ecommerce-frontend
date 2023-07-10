import React from "react";
import { ImCross } from "react-icons/im";

const ImageHolder = (props: any) => {
	const { onCancel, url } = props;
	return (
		<div className="w-[150px] h-[150px] border relative">
			{onCancel && (
				<span
					onClick={onCancel}
					className="absolute right-2 top-2 bg-dashboardClr text-white p-1 cursor-pointer"
				>
					<ImCross size={15} />
				</span>
			)}
			<img
				className="w-full h-full object-contain object-center"
				src={url}
				alt=""
			/>
		</div>
	);
};

export default ImageHolder;
