import React from "react";
import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./StoreFooter.css";
const StoreFooter = () => {
	return (
		<div className="bg-storeFrontClr grid grid-cols-3 gap-4 p-10 text-white footer">
			<div className="text-center font-bold text-xl">Company Name</div>
			<div className="flex flex-col gap-4  items-center">
				<div className="text-xl font-bold">Quick Links</div>
				<div className="flex gap-2">
					<Link className="font-bold tracking-wider text-sm" to="/">
						Home
					</Link>
					<Link className="font-bold tracking-wider text-sm" to="/">
						New Arrivals
					</Link>
					<Link className="font-bold tracking-wider text-sm" to="/">
						Shop
					</Link>
				</div>
			</div>
			<div className="flex flex-col items-center gap-4">
				<div className="text-xl font-bold">Follow Us</div>
				<div className="flex gap-4 justify-end">
					{/* socials */}
					<a
						href="https://www.facebook.com/hamroelectronics"
						target="_blank"
						rel="noreferrer"
					>
						<BsFacebook className="text-white text-2xl" />
					</a>
					<a
						href="https://www.facebook.com/hamroelectronics"
						target="_blank"
						rel="noreferrer"
					>
						<BsInstagram className="text-white text-2xl" />
					</a>
					<a
						href="https://www.facebook.com/hamroelectronics"
						target="_blank"
						rel="noreferrer"
					>
						<BsTiktok className="text-white text-2xl" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default StoreFooter;
