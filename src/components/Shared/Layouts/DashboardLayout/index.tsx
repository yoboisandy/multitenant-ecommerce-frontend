import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { adminNavlinks } from "../../../../constants/constants";
import { storeNavlinks } from "../../../../constants/constants";
import { useAppSelector } from "../../../../app/hooks";
import { INavLinks } from "../../../../constants/types";

const Index = ({ children }: any) => {
	const authState = useAppSelector((store) => store.AuthSlice);
	let navlinks: INavLinks[] = [];
	if (
		authState.current_user &&
		authState.current_user.roles.includes("admin")
	) {
		navlinks = adminNavlinks;
	} else if (
		authState.current_user &&
		authState.current_user.roles.includes("owner")
	) {
		navlinks = storeNavlinks;
	}

	return (
		<>
			<div className="flex dashboard">
				<Sidebar navlinks={navlinks} />
				<div className="w-full">
					<Navbar />
					<div className="p-6 my-0.5 overflow-x-hidden overflow-y-auto h-[calc(100vh-85px)]">
						{children}
					</div>
				</div>
			</div>
		</>
	);
};

export default Index;
