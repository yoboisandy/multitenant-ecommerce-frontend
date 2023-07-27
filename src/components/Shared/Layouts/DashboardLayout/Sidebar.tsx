import { NavLink } from "react-router-dom";
import logo from "../../../../assets/images/logo.svg";
import { useAppSelector } from "../../../../app/hooks";
import { ILinks, INavLinks } from "../../../../constants/types";

const Sidebar = ({ navlinks }: any) => {
	const dashboardState = useAppSelector((store) => store.DashboardSlice);
	const storeState: any = useAppSelector((store) => store.StoreSlice);
	return (
		<>
			<aside
				className={`${
					dashboardState.sidebarOpen
						? "w-[100%] md:w-[300px]"
						: "w-[0px]"
				} border-2 h-screen overflow-y-scroll transition-all duration-300 sidebar bg-gray-50`}
			>
				<div className="py-4 px-2 md:px-4 ">
					<div className="flex justify-center">
						<img
							src={
								storeState.current_store?.customization?.logo ||
								logo
							}
							className="h-12 "
							alt="logo"
						/>
					</div>
					<hr className="my-2" />
					<div className="space-y-[5px]">
						{navlinks.map((navlink: INavLinks) => {
							return (
								<div key={navlink.section}>
									<div className="px-2 text-[14px] md:text-md font-md text-gray-500 mb-2">
										{navlink.section}
									</div>
									<ul className="space-y-1">
										{navlink.links.map((link: ILinks) => {
											return (
												<li
													className="text-[12px] md:text-[18px]"
													key={link.to}
												>
													<NavLink
														className={`${({
															isActive,
														}: any) =>
															isActive &&
															"bg-gray-200"}  px-3 py-2 text-gray-800 flex items-center font-md rounded-lg hover:bg-gray-200 transition-all duration-200 ease-in-out`}
														to={link.to}
													>
														<span>{link.icon}</span>
														<span className="ml-3">
															{link.name}
														</span>
													</NavLink>
												</li>
											);
										})}
									</ul>
								</div>
							);
						})}
					</div>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
