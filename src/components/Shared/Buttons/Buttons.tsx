import "./Buttons.css";
export const PrimaryButton = ({ children, ...props }: any) => {
	const { className, loading, type, ...rest } = props;
	return (
		<>
			{type !== "div" && (
				<button
					disabled={loading}
					className={`flex text-white items-center justify-center bg-gradient-btn py-[10px] px-[16px] text-sm tracking-wider font-bold transition-all duration-100 ${
						loading && "opacity-50 cursor-not-allowed"
					}  ${props.className}`}
					{...rest}
				>
					{!loading && children}
					{loading && (
						<div className="ml-2">
							<svg
								className="animate-spin h-6 w-6 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-40"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></circle>
								<path
									className="opacity-60"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
						</div>
					)}
				</button>
			)}

			{type === "div" && (
				<div
					className={`cursor-pointer flex text-white items-center justify-center bg-gradient-btn py-[10px] px-[16px] text-sm tracking-wider font-bold transition-all duration-100  ${props.className}`}
					{...rest}
				>
					{children}
				</div>
			)}
		</>
	);
};

export const DashboardButton = ({ children, ...props }: any) => {
	const { className, loading, ...rest } = props;
	return (
		<>
			<button
				disabled={loading}
				className={`flex text-white items-center justify-center bg-dashboardClr py-[6px] px-[16px] text-sm tracking-wider font-bold transition-all duration-100 ${
					loading && "opacity-50 cursor-not-allowed"
				}  ${props.className}`}
				{...rest}
			>
				{!loading && children}
				{loading && (
					<div className="ml-2">
						<svg
							className="animate-spin h-6 w-6 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								className="opacity-40"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"
							></circle>
							<path
								className="opacity-60"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
					</div>
				)}
			</button>
		</>
	);
};

export const MutedButton = ({ children, ...props }: any) => {
	return (
		<div
			className={`cursor-pointer mb-2 md:mb-0 bg-gray-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white ${props.className}`}
			{...props}
		>
			{children}
		</div>
	);
};

export const FilterButton = ({ children, ...props }: any) => {
	const { className, selected, ...rest } = props;
	return (
		<button
			className={`bg-gray-400 text-white px-3 py-2 rounded text-sm ${
				selected && "bg-gray-600"
			} ${className}`}
			{...rest}
		>
			{selected && <span className="mr-2 font-bold">✓</span>}
			{children}
		</button>
	);
};

export const StoreFrontButton = ({ children, ...props }: any) => {
	const { className, loading, type, ...rest } = props;
	return (
		<>
			{type !== "div" && (
				<button
					disabled={loading}
					className={`flex text-white items-center justify-center bg-storeFrontClr py-[10px] px-[16px] text-sm tracking-wider font-bold transition-all duration-100 ${
						loading && "opacity-50 cursor-not-allowed"
					}  ${props.className}`}
					{...rest}
				>
					{!loading && children}
					{loading && (
						<div className="ml-2">
							<svg
								className="animate-spin h-6 w-6 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-40"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></circle>
								<path
									className="opacity-60"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
						</div>
					)}
				</button>
			)}
		</>
	);
};