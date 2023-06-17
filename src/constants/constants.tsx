import { FaShoppingBag } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";
import { MdCategory } from "react-icons/md";
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
		],
	},
];
