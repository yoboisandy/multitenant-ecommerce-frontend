import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { navlinks } from "../../../../constants/constants";

const index = ({ children }: any) => {
	return (
		<>
			<div className="flex dashboard">
				<Sidebar navlinks={navlinks} />
				<div className="w-full">
					<Navbar />
					<div className="p-6 my-0.5 overflow-x-hidden overflow-y-auto h-[calc(100vh-70px)]">
						{children}
					</div>
				</div>
			</div>
		</>
	);
};

export default index;
