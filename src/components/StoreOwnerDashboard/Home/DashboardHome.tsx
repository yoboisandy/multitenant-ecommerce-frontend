import React, { useEffect } from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import StatsCard from "./StatsCard";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import ProductCard from "../../LandingPage/Store/Shared/ProductCard/ProductCard";
import AddProductCard from "../Products/ProductCreate/AddProductCard";
import Chart from "react-apexcharts";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getDashboardStats } from "../../../app/Feature/StoreOwner/Analytics/AnalyticsApi";

const DashboardHome = () => {
	const dispatch = useAppDispatch();
	const statState: any = useAppSelector((state) => state.AnalyticsSlice);
	const [hourlyData, setHourlyData] = React.useState<any>({});

	useEffect(() => {
		dispatch(getDashboardStats());
	}, [dispatch]);

	useEffect(() => {
		if (statState.dashboardStats) {
			setHourlyData({
				series: [
					{
						name: "Today: ",
						data: statState.dashboardStats?.hourlyOrders?.map(
							(order: any) => order.count
						),
					},
				],
				options: {
					chart: {
						height: 350,
						id: "hourlyOrders",
						toolbar: {
							show: false,
						},
					},
					dataLabels: {
						enabled: false,
					},
					stroke: {
						curve: "smooth",
					},
					xaxis: {
						type: "number",
						categories: statState.dashboardStats?.hourlyOrders?.map(
							(order: any) => order.hour
						),
					},
					colors: ["var(--dashboardClr)"],
				},
			});
		}
	}, [statState.dashboardStats]);

	return (
		<div className="flex flex-col gap-2 p-2">
			<div className="flex justify-between">
				<div>
					<h1 className="text-xl font-bold text-gray-600">
						Good{" "}
						{new Date().getHours() < 12
							? "Morning"
							: new Date().getHours() < 18
							? "Afternoon"
							: "Evening"}
						, Store Owner!
					</h1>
					<span className="text-sm ">
						Here are your stats for today
					</span>
				</div>
				<p className="text-gray-500 text-xl">
					<Link
						to={"/"}
						className="flex font-bold gap-2 items-center"
					>
						<span>Visit Your Website</span>
						<FiExternalLink />
					</Link>
				</p>
			</div>
			{statState.dashboardStats && (
				<>
					<div className="flex gap-6">
						<StatsCard
							title="Revenue"
							value={`Rs. ${statState.dashboardStats?.totalRevenue}`}
							icon={
								<AiOutlineDollarCircle
									size={60}
									className="text-dashboardClr"
								/>
							}
						/>
						<StatsCard
							title="Orders"
							value={`${statState.dashboardStats?.totalOrders}`}
							icon={
								<IoBagHandleOutline
									size={60}
									className="text-dashboardClr"
								/>
							}
						/>
						<StatsCard
							title="Average Order Value"
							value={`Rs. ${statState.dashboardStats?.avgOrderValue}`}
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
								<div className="flex flex-col gap-4">
									<div className="font-bold text-base">
										Hourly Order Statistics
									</div>
									<div className="w-full h-full">
										{hourlyData &&
											hourlyData.options &&
											hourlyData.series && (
												<Chart
													options={
														hourlyData?.options
													}
													series={hourlyData?.series}
													type="line"
													width="100%"
												/>
											)}
									</div>
								</div>
							</AddProductCard>
						</div>
						<div className="flex-1">
							<AddProductCard>
								<div>
									<div className="font-bold text-base">
										Weekly Sales Statistics
									</div>
									<div></div>
								</div>
							</AddProductCard>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default DashboardHome;
