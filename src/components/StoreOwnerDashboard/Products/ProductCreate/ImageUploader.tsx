import React from "react";
import { RiImageAddLine } from "react-icons/ri";

const ImageUploader = (props: any) => {
	const { text, name, value, error, className, register, onChange, ...rest } =
		props;
	return (
		<label htmlFor="images">
			<div
				className={`w-[150px] h-[150px] border-4 border-dashed relative cursor-pointer`}
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
					className={`p-1.5 hidden text-lg outline outline-1  rounded-md  focus:outline-2 text-gray-500 tracking-wider transition-colors duration-100 w-100 ${
						error
							? `outline-red-500 focus:outline-red-300 hover:outline-red-300`
							: `outline-gray-300 focus:outline-purple-300`
					} ${className}`}
					{...rest}
				/>
			</div>
		</label>
	);
};

export default ImageUploader;
