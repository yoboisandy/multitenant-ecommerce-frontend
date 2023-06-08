import logo from "../../../assets/images/smallLogo.svg";
const FullPageLoader = () => {
	return (
		// loader with a logo in middle in tailwin css
		<div className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center">
			<div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-pink-600"></div>
			<img
				src={logo}
				alt="logo"
				className="h-16 w-16 absolute animate-pulse"
			/>
		</div>
	);
};

export default FullPageLoader;
