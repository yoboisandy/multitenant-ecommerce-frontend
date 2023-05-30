const Progress = (props: any) => {
	const { progress } = props;
	return (
		<div className="flex items-center">
			<div className="w-full bg-gray-200 rounded-full mr-2">
				<div
					className="w-full transition-all duration-500 bg-gradient-btn text-xs leading-none py-1 rounded-full"
					style={{ width: `${progress}%` }}
				></div>
			</div>
		</div>
	);
};

export default Progress;
