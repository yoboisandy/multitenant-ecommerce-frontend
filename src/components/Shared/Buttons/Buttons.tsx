import "./Buttons.css";
export const PrimaryButton = ({ children, ...props }: any) => {
	return (
		<button
			className={`flex rounded-xl text-white items-center justify-center bg-gradient-btn py-[10px] px-[16px] text-sm tracking-wider font-bold transition-all duration-100  ${props.className}`}
			{...props}
		>
			Get Started
		</button>
	);
};
