import React from "react";
import { useAppSelector } from "../../../../app/hooks";

const TrackOrderComp = ({ order }: any) => {
	const orderState: any = useAppSelector((state) => state.OrderSlice);

	return (
		<div className="flex flex-col gap-6">
			<div>
				<h1 className="font-bold text-3xl text-center">
					Track Your Order
				</h1>
			</div>
			<div className="flex gap-6 w-full justify-center">
				<div>
					Order Status:{" "}
					<button
						className={`${
							orderState.showOrder?.order_status === "pending"
								? "bg-yellow-500"
								: orderState.showOrder?.order_status ===
								  "processing"
								? "bg-blue-500"
								: orderState.showOrder?.order_status ===
								  "dispatched"
								? "bg-green-500"
								: orderState.showOrder?.order_status ===
								  "delivered"
								? "bg-green-500"
								: orderState.showOrder?.order_status ===
								  "cancelled"
								? "bg-red-500"
								: orderState.showOrder?.order_status ===
								  "returned"
								? "bg-red-500"
								: ""
						} capitalize text-white rounded-full px-2 py-1`}
					>
						{orderState.showOrder?.order_status}
					</button>
				</div>
				<div>
					Payment Status:{" "}
					<button
						className={`${
							orderState.showOrder?.payment_status === "paid"
								? "bg-green-500"
								: orderState.showOrder?.payment_status ===
								  "unpaid"
								? "bg-red-500"
								: ""
						} capitalize text-white rounded-full px-2 py-1`}
					>
						{orderState.showOrder.payment_status}
					</button>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="font-bold text-xl">Products</div>
				<div className="flex flex-col gap-2 overflow-y-auto">
					{!orderState.singleOrder.loading &&
						orderState.singleOrder.success && (
							<div className="flex flex-col gap-4">
								{orderState.showOrder?.products?.map(
									(item: any) => (
										<div
											key={item?.product?.id}
											className="relative flex gap-4 items-center justify-between border p-4"
										>
											<div className="flex gap-2 md:gap-6">
												<div className="md:w-20 w-14 h-20 relative">
													<img
														src={
															(item.variant &&
																item.product.product_images.find(
																	(
																		image: any
																	) =>
																		image.variant ===
																		item
																			.variant
																			.name
																)?.image) ||
															item.product
																.product_images[0]
																.image
														}
														alt=""
														className="w-full h-full rounded object-cover border"
													/>
													<span className="bg-storeFrontClr w-6 h-6 text-white flex p-1.5 text-center rounded-full justify-center items-center absolute -top-2 -left-2">
														<span>
															{item.quantity}
														</span>
													</span>
												</div>
												<div className="flex flex-col gap-1">
													<div className="md:text-base text-xs font-semibold">
														{item.product.name}
													</div>
													{item.variant && (
														<div className="text-xs font-medium text-gray-500">
															Variant:{" "}
															{item.variant.name}
														</div>
													)}
													<div className="flex flex-col gap-1">
														<div className="md:text-lg text-base font-medium">
															Rs. {item.price}
														</div>
													</div>
												</div>
											</div>
										</div>
									)
								)}
							</div>
						)}
				</div>
			</div>
		</div>
	);
};

export default TrackOrderComp;
