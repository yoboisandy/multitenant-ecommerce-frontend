import React from "react";
import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./StoreFooter.css";
import { useAppSelector } from "../../../../../app/hooks";
const StoreFooter = () => {
	const storeState: any = useAppSelector((state) => state.StoreSlice);
	return (
		<div className="bg-storeFrontClr footer">
			<div className="max-w-7xl mx-auto grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-6 p-10 text-white ">
				<div className="text-center font-bold text-xl">
					{storeState?.current_store?.store_name}
				</div>
				<div className="flex flex-col gap-4  items-center">
					<div className="text-xl font-bold">Quick Links</div>
					<div className="flex gap-2">
						<Link
							className="font-bold tracking-wider text-sm"
							to="/"
						>
							Home
						</Link>
						<Link
							className="font-bold tracking-wider text-sm"
							to="/new-arrivals"
						>
							New Arrivals
						</Link>
						<Link
							className="font-bold tracking-wider text-sm"
							to="/shop"
						>
							Shop
						</Link>
					</div>
				</div>
				<div className="flex flex-col items-center gap-4">
					<div className="text-xl font-bold">Follow Us</div>
					<div className="flex gap-4 justify-end">
						{/* socials */}
						{storeState?.current_store?.setting?.store_fb && (
							<a
								href={
									storeState?.current_store?.setting?.store_fb
								}
								target="_blank"
								rel="noreferrer"
							>
								<BsFacebook className="text-white text-2xl" />
							</a>
						)}
						{storeState?.current_store?.setting?.store_ig && (
							<a
								href={
									storeState?.current_store?.setting?.store_ig
								}
								target="_blank"
								rel="noreferrer"
							>
								<BsInstagram className="text-white text-2xl" />
							</a>
						)}
						{storeState?.current_store?.setting?.store_tiktok && (
							<a
								href={
									storeState?.current_store?.setting
										?.store_tiktok
								}
								target="_blank"
								rel="noreferrer"
							>
								<BsTiktok className="text-white text-2xl" />
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default StoreFooter;
