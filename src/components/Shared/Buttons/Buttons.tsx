import "./Buttons.css";
export const PrimaryButton = ({ children, ...props }: any) => {
	const { className, ...rest } = props;
	return (
		<button
			className={`flex text-white items-center justify-center bg-gradient-btn py-[10px] px-[16px] text-sm tracking-wider font-bold transition-all duration-100  ${props.className}`}
			{...rest}
		>
			{children}
		</button>
	);
};
