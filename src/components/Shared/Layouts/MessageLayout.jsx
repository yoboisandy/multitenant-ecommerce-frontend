import React from "react";
import logo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const MessageLayout = ({ children }) => {
	return (
		<div className="bg-gradient-btn h-[100vh] flex flex-col justify-center items-center shadow-lg">
			<div className="bg-white p-8 space-y-4 w-10/12 md:6/12 lg:w-5/12 rounded-lg">
				<div className="flex justify-center items-center">
					<Link to="/">
						<img
							src={logo}
							alt="logo"
							className="w-[170px] h-[50px]"
						/>
					</Link>
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default MessageLayout;
