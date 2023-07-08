import { useState } from "react";
import { ImEye, ImEyeBlocked } from "react-icons/im";

export const TextField = (props: any) => {
	const [showPassword, setShowPassword] = useState(false);
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
		...rest
	} = props;

	const focusOutlineColor = focusOutline || "outline-purple-400";

	return (
		<div className="flex flex-col gap-1.5 flex-1 relative">
			<label className="text-md font-md" htmlFor={name}>
				{text} {required && <span className="text-red-500">*</span>}
			</label>
			<input
				type={showPassword ? "text" : type}
				autoComplete="off"
				name={name}
				id={name}
				{...(register && register(name))}
				placeholder={placeholder}
				value={value}
				className={`p-1.5 text-lg outline outline-1  rounded-md  focus:outline-2 text-gray-500 tracking-wider transition-colors duration-100 w-100 ${
					error
						? `outline-red-500 focus:outline-red-300 hover:outline-red-300`
						: `outline-gray-300 ${focusOutlineColor}`
				} ${className}`}
				{...rest}
			/>
			{/* eye button if type is password */}
			{type === "password" && (
				<div className="absolute right-3 top-[44px]">
					<span
						className="cursor-pointer text-gray-400"
						onClick={() => {
							setShowPassword(!showPassword);
						}}
					>
						{showPassword ? <ImEye /> : <ImEyeBlocked />}
					</span>
				</div>
			)}
			{error && (
				<label htmlFor={name} className="text-red-500 text-sm">
					{error}
				</label>
			)}
		</div>
	);
};

export const TextArea = (props: any) => {
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
		...rest
	} = props;

	const focusOutlineColor = focusOutline || "outline-purple-400";

	return (
		<div className="flex flex-col gap-1.5 flex-1 relative">
			<label className="text-md font-md" htmlFor={name}>
				{text} {required && <span className="text-red-500">*</span>}
			</label>
			<textarea
				autoComplete="off"
				name={name}
				id={name}
				{...(register && register(name))}
				placeholder={placeholder}
				className={`p-1.5 text-lg outline outline-1  rounded-md  focus:outline-2 text-gray-500 tracking-wider transition-colors duration-100 w-100 ${
					error
						? `outline-red-500 focus:outline-red-300 hover:outline-red-300`
						: `outline-gray-300 ${focusOutlineColor}`
				} ${className}`}
				{...rest}
			>
				{value}
			</textarea>
			{error && (
				<label htmlFor={name} className="text-red-500 text-sm">
					{error}
				</label>
			)}
		</div>
	);
};

export const TextFieldGroup = (props: any) => {
	const {
		text,
		name,
		type,
		placeholder,
		value,
		error,
		required,
		className,
		groupText,
		register,
		focusOutline,
		...rest
	} = props;

	const focusOutlineColor = focusOutline || "outline-purple-400";

	return (
		<div className="flex flex-col gap-1.5 w-full">
			<label className="text-md font-md" htmlFor={name}>
				{text} {required && <span className="text-red-500">*</span>}
			</label>
			<div className="relative flex flex-wrap items-stretch">
				<input
					type={type}
					name={name}
					id={name}
					{...register(name)}
					placeholder={placeholder}
					value={value}
					className={`p-1.5 text-lg border rounded-md rounded-r-none text-gray-500 tracking-wider transition-colors duration-100 w-100 focus:outline-0 focus:border-1 ${
						error
							? `border-red-500 focus:outline-red-300 hover:border-red-300`
							: `border-gray-300 ${focusOutlineColor}`
					} ${className} flex-grow`}
					{...rest}
				/>
				<span className="flex items-center rounded-r-md border border-l-0 border-gray-400 tracking-wider p-1.5 text-center text-lg bg-gray-400 text-white">
					{groupText}
				</span>
			</div>
			{error && (
				<label htmlFor={name} className="text-red-500">
					{error}
				</label>
			)}
		</div>
	);
};

export const SearchBox = (props: any) => {
	const {
		name,
		placeholder,
		value,
		error,
		className,
		focusOutline,
		...rest
	} = props;

	const focusOutlineColor = focusOutline || "outline-purple-400";

	return (
		<div className="flex flex-col gap-1.5 w-full">
			<input
				type="search"
				name={name}
				id={name}
				placeholder={placeholder}
				value={value}
				className={`p-1.5 text-sm border rounded-md text-gray-500 tracking-wider transition-colors duration-100 w-100 focus:outline-0 focus:border-1 outline-${focusOutlineColor} ${className}`}
				{...rest}
			/>
			{error && (
				<label htmlFor={name} className="text-red-500">
					{error}
				</label>
			)}
		</div>
	);
};