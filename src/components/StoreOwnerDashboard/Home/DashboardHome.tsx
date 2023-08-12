import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import StatsCard from "./StatsCard";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import ProductCard from "../../LandingPage/Store/Shared/ProductCard/ProductCard";
import AddProductCard from "../Products/ProductCreate/AddProductCard";

const DashboardHome = () => {
	return (
		<div className="flex flex-col gap-2 p-2">
			<div className="flex justify-between">
				<h1 className="text-xl font-bold text-gray-600">
					Good{" "}
					{new Date().getHours() < 12
						? "Morning"
						: new Date().getHours() < 18
						? "Afternoon"
						: "Evening"}
					, Store Owner!
				</h1>
				<p className="text-gray-600 text-xl">
					<Link
						to={"/"}
						className="flex font-bold gap-2 items-center"
					>
						<span>Visit Your Website</span>
						<FiExternalLink />
					</Link>
				</p>
			</div>
			<div className="flex gap-6">
				<StatsCard
					title="Revenue"
					value="Rs. 100"
					icon={
						<AiOutlineDollarCircle
							size={60}
							className="text-dashboardClr"
						/>
					}
				/>
				<StatsCard
					title="Orders"
					value="14"
					icon={
						<IoBagHandleOutline
							size={60}
							className="text-dashboardClr"
						/>
					}
				/>
				<StatsCard
					title="Average Order Value"
					value="Rs. 3400"
					icon={
						<FaFileInvoiceDollar
							size={60}
							className="text-dashboardClr"
						/>
					}
				/>
			</div>
			<div className="mt-4 flex gap-6">
				<div className="flex-1">
					<AddProductCard>
						<div>
							<div className="font-bold text-base">
								Hourly Order Statistics
							</div>
							<div></div>
						</div>
					</AddProductCard>
				</div>
				<div className="flex-1">
					<AddProductCard>
						<div>
							<div className="font-bold text-base">
								Hourly Order Statistics
							</div>
							<div></div>
						</div>
					</AddProductCard>
				</div>
			</div>
		</div>
	);
};

export default DashboardHome;
