import React from "react";
import { RiImageAddLine } from "react-icons/ri";

const ImageUploader = (props: any) => {
	const { text, name, value, error, className, register, onChange, ...rest } =
		props;
	return (
		<label htmlFor="images">
			<div
				className={`w-[150px] h-[150px] border-4 border-gray-300 border-dashed relative cursor-pointer`}
			>
				<div className="flex items-center justify-center h-full w-full text-gray-300">
					<RiImageAddLine className="text-7xl" />
				</div>
				<input
					type="file"
					id={name}
					accept="image/*"
					{...(register && register(name))}
					onChange={onChange}
					value={value}
					className={`hidden`}
					{...rest}
				/>
			</div>
		</label>
	);
};

export default ImageUploader;
