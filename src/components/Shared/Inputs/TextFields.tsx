export const TextField = (props: any) => {
	const { text, name, type, placeholder, value, error, required, className } =
		props;
	return (
		<div className="flex flex-col gap-1.5">
			<label className="text-md font-md" htmlFor={name}>
				{text} {required && <span className="text-red-500">*</span>}
			</label>
			<input
				type={type}
				name={name}
				id={name}
				placeholder={placeholder}
				value={value}
				className={`p-1.5 text-lg outline outline-1  rounded-md  focus:outline-2 text-gray-500 tracking-wider transition-colors duration-100 w-100 ${
					error
						? `outline-red-500 focus:outline-red-300 hover:outline-red-300`
						: `outline-gray-300 focus:outline-purple-300`
				} ${className}`}
			/>
			{error && (
				<label htmlFor={name} className="text-red-500">
					{error}
				</label>
			)}
		</div>
	);
};
