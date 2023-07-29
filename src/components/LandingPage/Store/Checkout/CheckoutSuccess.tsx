import React from "react";
import MessageLayout from "../../../Shared/Layouts/MessageLayout";
import { CheckmarkIcon } from "react-hot-toast";
import { StoreFrontButton } from "../../../Shared/Buttons/Buttons";
import { GiCheckMark } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const CheckoutSuccess = ({ checkoutData }: any) => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col items-center justify-center space-y-4 shadow py-14 px-10 w-7/12 mx-auto">
			<GiCheckMark className="text-6xl text-green-500 rounded-full p-2 mb-6 border" />
			<h1 className="text-2xl font-semibold">
				Order Placed Successfully
			</h1>
			<p className="text-gray-600">
				You will be receiving a confirmation sms or call soon
			</p>
			<div className="flex flex-col gap-2">
				<p>Order Quantity: {checkoutData.quantity}</p>
				<p>Total Price: Rs. {checkoutData.price}</p>
			</div>
			<div>
				<StoreFrontButton onClick={() => navigate("/shop")}>
					Shop More
				</StoreFrontButton>
			</div>
		</div>
	);
};

export default CheckoutSuccess;
