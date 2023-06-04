import React, { useEffect, useState } from "react";
import MessageLayout from "../../components/Shared/Layouts/MessageLayout";
import { GiCheckMark } from "react-icons/gi";
import { VscLoading } from "react-icons/vsc";
import { checkStoreReady, verifyStore } from "../../app/Feature/Store/StoreApi";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ImCross } from "react-icons/im";

const VerifyStore = () => {
	const [showCreating, setShowCreating] = useState(false);
	const [storeReadyFailed, setStoreReadyFailed] = useState(false);
	const dispatch = useAppDispatch();
	const { store_id, token } = useParams();

	const storeState: any = useAppSelector((store) => store.StoreSlice);

	useEffect(() => {
		dispatch(verifyStore({ store_id, token }));
	}, [dispatch, store_id, token]);

	let counter = 0;
	useEffect(() => {
		if (storeState.verify_success) {
			setTimeout(() => {
				setShowCreating(true);
			}, 1000);

			const intervalId = setInterval(() => {
				dispatch(checkStoreReady({ store_id })).then((res: any) => {
					console.log(res.payload);
					if (res.payload.success) {
						window.location.href = res.payload.data.url;
					} else {
						if (counter === 5) {
							setStoreReadyFailed(true);
							clearInterval(intervalId);
						}
						counter++;
					}
				});
			}, 5000);
		}
	}, [storeState.verify_success, dispatch, store_id, counter]);

	return (
		<MessageLayout>
			{/* gradient border in the div */}
			<div className="flex flex-col items-center gap-4 justify-center">
				{!showCreating && (
					<>
						<div className="rounded-full w-fit p-2 border-2 bg-gradient-btn">
							{storeState.verify_loading && (
								<VscLoading className="text-6xl text-gray-400 animate-spin p-2 bg-white rounded-full" />
							)}
							{storeState.verify_success && (
								<GiCheckMark className="text-6xl text-green-500 rounded-full p-2 bg-white" />
							)}
							{storeState.verify_failed && (
								<ImCross className="text-6xl text-red-500 rounded-full p-2 bg-white" />
							)}
						</div>
						<div className="text-2xl font-bold text-gray-600">
							{storeState.verify_loading &&
								"Verifying Your Email"}
							{storeState.verify_success && "Email Verified"}
							{storeState.verify_failed &&
								"Email Verification Failed"}
						</div>
						<div className="text-gray-500 w-[400px] text-center">
							{storeState.verify_loading &&
								"Please wait while we verify your email address"}
							{storeState.verify_success &&
								"Your email address has been verified successfully"}
							{storeState.verify_failed &&
								"Your email address verification failed"}
						</div>
						{storeState.verify_failed && (
							<div>
								<Link
									to="/"
									className="text-blue-500 hover:underline"
								>
									Go Back to Home
								</Link>
							</div>
						)}
					</>
				)}
				{/* show this after 1 sec of verify_success */}

				{showCreating && (
					<>
						<div className="rounded-full w-fit p-2 border-2 bg-gradient-btn">
							{storeState.store_ready_success && (
								<GiCheckMark className="text-6xl text-green-500 rounded-full p-2 bg-white" />
							)}
							{!storeState.store_ready_success &&
								!storeReadyFailed && (
									<VscLoading className="text-6xl text-gray-400 animate-spin p-2 bg-white rounded-full" />
								)}

							{storeReadyFailed && (
								<ImCross className="text-6xl text-red-500 rounded-full p-2 bg-white" />
							)}
						</div>
						<div className="text-2xl font-bold text-gray-600 text-center">
							{!storeState.store_ready_success &&
								!storeReadyFailed &&
								"Creating your store..."}
							{storeState.store_ready_success &&
								"Your Store Created Successfully. Redirecting to Login Page..."}
							{storeReadyFailed && (
								<>
									Your store creation failed. please contact
									us at{" "}
									<a
										href="mailto:support@mecomm.com"
										className="text-blue-500 hover:underline"
									>
										support@mecomm.com
									</a>
								</>
							)}
						</div>
						{!storeReadyFailed && (
							<>
								<div className="text-gray-500 w-[400px] text-center">
									Please wait while we create your store. You
									will be redirected to login page once your
									store is created.
								</div>
								<div className="text-gray-600 text-md font-bold w-[400px] text-center">
									Please do not close or refresh the page.
								</div>
							</>
						)}
					</>
				)}
			</div>
		</MessageLayout>
	);
};

export default VerifyStore;
