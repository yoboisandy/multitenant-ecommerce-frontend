import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { navlinks } from "../../../../constants/constants";

const index = ({ children }: any) => {
	return (
		<>
			<div className="flex">
				<Sidebar navlinks={navlinks} />
				<div className="w-full h-screen overflow-y-hidden">
					<Navbar />
					<div className="overflow-y-scroll p-6">{children}</div>
				</div>
			</div>
		</>
	);
};

export default index;
