import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const index = ({ children, ...props }: any) => {
	return (
		<>
			<div className="flex">
				<Sidebar navlinks={props.navlinks} />
				<div className="w-full h-screen overflow-y-hidden">
					<Navbar />
					<div className="overflow-y-scroll p-6">{children}</div>
				</div>
			</div>
		</>
	);
};

export default index;
