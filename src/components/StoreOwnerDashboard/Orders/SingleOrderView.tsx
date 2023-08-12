import React, { useEffect } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddProductCard from "../Products/ProductCreate/AddProductCard";

const SingleOrderView = ({ open, setOpen, order, setShowEditModal }: any) => {
	useEffect(() => {
		console.log(order);
	}, [order]);
	return (
		<>
			<div
				className={`fixed top-0 right-0 bottom-0 h-screen lg:w-3/4 sm:w-3/4 w-full bg-white transition-transform p-4 z-30 ${
					open
						? "transform translate-x-0"
						: "transform translate-x-full"
				}`}
			>
				<div className="flex flex-col justify-between h-full">
					<div className="flex flex-col gap-6">
						<div className="flex justify-between items-center border-b border-storeFrontClr pb-4">
							<div className="text-storeFrontClr">
								<GiShoppingCart size={50} />
							</div>
							<h2 className="text-3xl font-semibold">
								Order: #{order.order_number}
							</h2>
							<button
								className="text-storeFrontClr"
								onClick={() => setOpen(false)}
							>
								<BsFillArrowRightCircleFill size={30} />
							</button>
						</div>
						<div className="flex flex-col gap-4 overflow-y-auto">
							<div>Created at: {order.created_at}</div>
							<div>
								Status:{" "}
								<button
									onClick={() => {
										setShowEditModal(true);
									}}
									className={`${
										order.order_status === "pending"
											? "bg-yellow-500"
											: order.order_status ===
											  "processing"
											? "bg-blue-500"
											: order.order_status ===
											  "dispatched"
											? "bg-green-500"
											: order.order_status === "delivered"
											? "bg-green-500"
											: order.order_status === "cancelled"
											? "bg-red-500"
											: order.order_status === "returned"
											? "bg-red-500"
											: ""
									} capitalize text-white rounded-full px-2 py-1`}
								>
									{order.order_status}
								</button>{" "}
								&{" "}
								<button
									onClick={() => {
										setShowEditModal(true);
									}}
									className={`${
										order.payment_status === "paid"
											? "bg-green-500"
											: order.payment_status === "unpaid"
											? "bg-red-500"
											: ""
									} capitalize text-white rounded-full px-2 py-1`}
								>
									{order.payment_status}
								</button>
							</div>
							<div>
								Payment Method:{" "}
								<span className="uppercase">
									{order.payment_method}
								</span>
							</div>
							<div className="flex md:flex-row flex-col gap-2">
								<div className="w-[49%]">
									<AddProductCard>
										<h2 className="text-xl font-bold">
											Order Summary
										</h2>
										<div className="flex flex-col gap-2 overflow-y-auto">
											{order &&
											order.products.length > 0 ? (
												<div className="flex flex-col gap-4">
													{order.products.map(
														(item: any) => (
															<div
																key={
																	item
																		?.product
																		?.id
																}
																className="relative flex gap-4 items-center justify-between border-b pb-4"
															>
																<div className="flex gap-2 md:gap-6">
																	<div className="md:w-16 w-14 h-16">
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
																					)
																						?.image) ||
																				item
																					.product
																					.product_images[0]
																					.image
																			}
																			alt=""
																			className="w-full h-full rounded object-cover"
																		/>
																	</div>
																	<div className="flex flex-col gap-1">
																		<div className="md:text-base text-xs font-semibold">
																			{
																				item
																					.product
																					.name
																			}
																		</div>
																		{item.variant && (
																			<div className="text-xs font-medium text-gray-500">
																				Variant:{" "}
																				{
																					item
																						.variant
																						.name
																				}
																			</div>
																		)}
																		<div className="flex flex-col gap-1">
																			<div className="md:text-lg text-base font-medium">
																				Rs.{" "}
																				{
																					item.price
																				}
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														)
													)}
												</div>
											) : (
												""
											)}
										</div>
									</AddProductCard>
								</div>
								<div className="w-[49%]">
									<AddProductCard>
										<h2 className="text-xl font-bold">
											Customer Details
										</h2>
										<div className="flex flex-col gap-2 h-auto overflow-y-auto">
											<div className="flex flex-col gap-2">
												<div className="flex flex-col gap-2">
													<div className="text-base font-medium text-gray-500">
														<b>Name</b>:{" "}
														{order.customer_name}
													</div>
													<div className="text-base font-medium text-gray-500">
														<b>Email</b>:{" "}
														{order.customer_email}
													</div>
													<div className="text-base font-medium text-gray-500">
														<b>Phone</b>:{" "}
														{order.customer_phone}
													</div>
													<div className="text-base font-medium text-gray-500">
														<b>Province</b>:{" "}
														{
															order.customer_address_province
														}
													</div>
													<div className="text-base font-medium text-gray-500">
														<b>City</b>:{" "}
														{
															order.customer_address_city
														}
													</div>
													<div className="text-base font-medium text-gray-500">
														<b>Area</b>:{" "}
														{
															order.customer_address_area
														}
													</div>
													<div className="text-base font-medium text-gray-500">
														<b>Nearby Landmark</b>:{" "}
														{
															order.customer_address_nearby_landmark
														}
													</div>
												</div>
												{/* <div className="text-xs font-medium text-gray-500">
													{order.customer.address}
												</div> */}
											</div>
										</div>
									</AddProductCard>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{open && (
				<div
					className="fixed z-20 top-0 left-0 w-full h-screen bg-black opacity-50"
					onClick={() => setOpen(false)}
				/>
			)}
		</>
	);
};

export default SingleOrderView;
