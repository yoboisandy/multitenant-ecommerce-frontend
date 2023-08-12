import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";

const StatsCard = ({ title, value, icon }: any) => {
	return (
		<div className="flex-1 flex justify-between items-center gap-2 border rounded p-4 group bg-gray-50">
			<div className="space-y-2">
				<p className="text-2xl font-bold text-gray-600">{title}</p>
				<p className="text-lg">{value}</p>
			</div>
			<div>{icon}</div>
		</div>
	);
};

export default StatsCard;
