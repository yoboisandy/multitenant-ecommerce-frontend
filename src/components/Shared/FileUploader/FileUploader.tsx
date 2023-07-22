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
		currentImageUrl,
		setCurrentImageUrl,
		onChange,
		setFile,
		isVariant,
		onRemove,
		...rest
	} = props;

	const removeImage = () => {
		if (!isVariant) {
			setCurrentImageUrl(null);
			setFile(null);
		} else {
			onRemove();
		}
	};

	return (
		<div className="flex flex-col gap-1.5 flex-1 relative">
			<label className="text-md font-md" htmlFor={name}>
				{text} {required && <span className="text-red-500">*</span>}
			</label>
			<label
				className="border-4 border-dashed border-gray-300 rounded-md cursor-pointer transition-colors duration-100 w-full h-[150px] overflow-hidden"
				htmlFor={name}
			>
				{!currentImageUrl && (
					<div className="flex flex-col items-center gap-2 justify-center h-full w-full p-4">
						<AiOutlineCloudUpload className="text-4xl text-gray-400" />
						<div>{placeholder ?? "Click to choose a file"}</div>
					</div>
				)}
				{currentImageUrl && (
					<img
						src={currentImageUrl}
						alt="current image"
						className="object-contain rounded-md h-full w-full"
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
				className={`p-1.5 hidden text-lg outline outline-1  rounded-md  focus:outline-2 text-gray-500 tracking-wider transition-colors duration-100 w-100`}
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
