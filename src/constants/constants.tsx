import { FaShoppingBag } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";
import { MdCategory } from "react-icons/md";
import { AiTwotoneGift } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { DiGoogleAnalytics } from "react-icons/di";
import { HiLightBulb } from "react-icons/hi";
import { BsCashCoin } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import { INavLinks } from "./types";
export const adminNavlinks: INavLinks[] = [
	{
		section: "Main Links",
		links: [
			{
				name: "Dashboard",
				to: "/admin",
				icon: <AiTwotoneHome size={20} />,
			},
			{
				name: "Stores",
				to: "/stores",
				icon: <FaShoppingBag size={20} />,
			},
			{
				name: "Store Categories",
				to: "/store-categories",
				icon: <MdCategory size={20} />,
			},
		],
	},
];
export const storeNavlinks: INavLinks[] = [
	{
		section: "Main Links",
		links: [
			{
				name: "Dashboard",
				to: "/dashboard",
				icon: <AiTwotoneHome size={20} />,
			},
			{
				name: "Categories",
				to: "/categories",
				icon: <MdCategory size={20} />,
			},
			{
				name: "Products",
				to: "/products",
				icon: <AiTwotoneGift size={20} />,
			},
			{
				name: "Orders",
				to: "/orders",
				icon: <BsFillCartFill size={20} />,
			},
			// {
			// 	name: "Analytics",
			// 	to: "/analytics",
			// 	icon: <DiGoogleAnalytics size={20} />,
			// },
		],
	},
	{
		section: "Customization",
		links: [
			{
				name: "Appearance",
				to: "/customize",
				icon: <HiLightBulb size={20} />,
			},
			// {
			// 	name: "Payment Methods",
			// 	to: "/payment",
			// 	icon: <BsCashCoin size={20} />,
			// },
			{
				name: "Store Setting",
				to: "/settings",
				icon: <AiTwotoneSetting size={20} />,
			},
		],
	},
];
