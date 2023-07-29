import dashboard from "../../../../assets/images/dashboard.svg";
const OtherSections = () => {
	return (
		<section className="flex justify-center mt-6">
			<div className="bg-gradient-btn h-[300px] p-1 animate-gradientText">
				<img src={dashboard} alt="" className="h-full object-cover" />
			</div>
		</section>
	);
};

export default OtherSections;
