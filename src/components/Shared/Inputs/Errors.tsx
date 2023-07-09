export const ErrorLabel = (props: any) => {
	const { error, name } = props;
	return (
		error && (
			<label htmlFor={name} className="text-red-500 text-sm">
				{error}
			</label>
		)
	);
};
