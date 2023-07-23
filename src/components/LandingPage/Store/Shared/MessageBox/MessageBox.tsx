import React from "react";
import { StoreFrontButton } from "../../../../Shared/Buttons/Buttons";
import { useNavigate } from "react-router-dom";

const MessageBox = ({ link, message, buttonText }: any) => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col items-center gap-4 text-gray-600 bg-gray-100 py-8 font-bold text-xl">
			<div>{message}</div>
			<div>
				<StoreFrontButton onClick={() => navigate(link)}>
					{buttonText}
				</StoreFrontButton>
			</div>
		</div>
	);
};

export default MessageBox;
