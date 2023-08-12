import CreatableSelect from "react-select/creatable";

const SelectField = (props: any) => {
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
		options,
		defaultText,
		selected,
		focusOutline,
		...rest
	} = props;

	const focusOutlineColor = focusOutline || "outline-purple-400";

	return (
		<div className="flex flex-col gap-1.5">
			<label className="text-md font-md" htmlFor={name}>
				{text} {required && <span className="text-red-500">*</span>}
			</label>
			<select
				name={name}
				id={name}
				{...(register && register(name))}
				className={`p-1.5 text-lg outline outline-1  rounded-md  focus:outline-2 text-gray-500 tracking-wider transition-colors duration-100 w-100 ${
					error
						? `outline-red-500 focus:outline-red-300 hover:outline-red-300`
						: `outline-gray-300 ${focusOutlineColor}`
				} ${className}`}
				defaultValue={selected || ""}
				{...rest}
			>
				{defaultText && (
					<option disabled value="">
						{defaultText}
					</option>
				)}
				{options.map((option: any) => (
					<option
						key={option.value}
						value={option.value}
						selected={selected === option.value}
					>
						{option.text}
					</option>
				))}
			</select>
			{error && (
				<label htmlFor={name} className="text-red-500 text-sm">
					{error}
				</label>
			)}
		</div>
	);
};

export const MultiCreatableSelect = (props: any) => {
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
		options,
		defaultText,
		selected,
		onChange,
		focusOutline,
		defaultValues,
		...rest
	} = props;

	const focusOutlineColor = focusOutline || "border-purple-400";
	return (
		<div className="flex flex-col gap-1.5">
			{text && (
				<label className="text-md font-md" htmlFor={name}>
					{text} {required && <span className="text-red-500">*</span>}
				</label>
			)}
			<CreatableSelect
				isMulti
				options={options}
				onChange={onChange}
				defaultValue={defaultValues}
				theme={(theme) => ({
					...theme,
					colors: {
						...theme.colors,
						primary: "dashboardClr",
					},
				})}
				classNames={{
					control: ({ isFocused }) =>
						isFocused ? `${focusOutlineColor}` : "border-gray-300",
				}}
				placeholder={placeholder}
			/>
			{error && (
				<label htmlFor={name} className="text-red-500 text-sm">
					{error}
				</label>
			)}
		</div>
	);
};

export default SelectField;
