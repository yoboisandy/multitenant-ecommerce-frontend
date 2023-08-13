import React, { useEffect } from "react";
import TrackOrderComp from "../../../components/LandingPage/Store/TrackOrderPage/TrackOrderComp";
import StoreFrontLayout from "../../../components/LandingPage/Store/Shared/Layout/StoreFrontLayout";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { getOrderById } from "../../../app/Feature/Order/OrderApi";

const TrackOrder = () => {
	let { id } = useParams();
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getOrderById(id));
	}, [dispatch]);
	return (
		<StoreFrontLayout>
			<div className="my-10 max-w-7xl mx-auto px-4">
				<TrackOrderComp />
			</div>
		</StoreFrontLayout>
	);
};

export default TrackOrder;
