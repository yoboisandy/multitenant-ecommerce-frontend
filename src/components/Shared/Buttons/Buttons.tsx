import "./Buttons.css";
export const PrimaryButton = ({ children, ...props }: any) => {
	const { className, type, ...rest } = props;
	return (
		<>
			{type !== "div" && (
				<button
					className={`flex text-white items-center justify-center bg-gradient-btn py-[10px] px-[16px] text-sm tracking-wider font-bold transition-all duration-100  ${props.className}`}
					{...rest}
				>
					{children}
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
