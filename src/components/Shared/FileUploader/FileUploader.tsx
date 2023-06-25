import { set } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai";

export const FileUploader = (props: any) => {
	const {
		text,
		name,
		type,
		placeholder,
		value,
		error,
		required,
		className,
		register,
		focusOutline,
		currentImageUrl,
		setCurrentImageUrl,
		onChange,
		...rest
	} = props;

	const removeImage = () => {
		setCurrentImageUrl(null);
	};

	return (
		<div className="flex flex-col gap-1.5 flex-1 relative">
			<label className="text-md font-md" htmlFor={name}>
				{text} {required && <span className="text-red-500">*</span>}
			</label>
			<label
				className="border-4 border-dashed border-gray-300 rounded-md cursor-pointer transition-colors duration-100 w-full overflow-hidden"
				htmlFor={name}
			>
				{!currentImageUrl && (
					<div className="flex flex-col items-center gap-2 justify-center p-4">
						<AiOutlineCloudUpload className="text-4xl text-gray-400" />
						<div>Click to choose a file</div>
					</div>
				)}
				{currentImageUrl && (
					<img
						src={currentImageUrl}
						alt="current image"
						className="object-contain rounded-md h-[150px] w-full"
					/>
				)}
			</label>
			{currentImageUrl && (
				<span
					onClick={removeImage}
					className="text-right underline text-red-500 cursor-pointer"
				>
					remove image
				</span>
			)}
			<input
				type="file"
				name={name}
				id={name}
				accept="image/*"
				{...(register && register(name))}
				onChange={onChange}
				placeholder={placeholder}
				value={value}
				className={`p-1.5 hidden text-lg outline outline-1  rounded-md  focus:outline-2 text-gray-500 tracking-wider transition-colors duration-100 w-100 ${
					error
						? `outline-red-500 focus:outline-red-300 hover:outline-red-300`
						: `outline-gray-300 focus:outline-${
								focusOutline ?? "purple-300"
						  }`
				} ${className}`}
				{...rest}
			/>
			{error && (
				<label htmlFor={name} className="text-red-500 text-sm">
					{error}
				</label>
			)}
		</div>
	);
};
