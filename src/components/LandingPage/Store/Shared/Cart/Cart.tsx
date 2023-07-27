import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import {
	addToCart,
	removeFromCart,
	toggleCart,
} from "../../../../../app/Feature/Cart/CartSlice";
import { ImCart, ImCross } from "react-icons/im";
import { BsArrowRight, BsFillArrowRightCircleFill } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { StoreFrontButton } from "../../../../Shared/Buttons/Buttons";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = ({ open, setOpen }: any) => {
	const cartState = useAppSelector((state) => state.CartSlice);
	const dispatch = useAppDispatch();

	const toggleCartState = () => {
		dispatch(toggleCart());
		document.body.style.overflow = cartState.open ? "auto" : "hidden";
	};

	useEffect(() => {
		document.body.style.overflow = cartState.open ? "hidden" : "auto";
	}, [cartState.open]);

	const removeItem = (item: any) => {
		dispatch(
			removeFromCart({
				productId: item.product.id,
				variantId: item.variant?.id,
			})
		);
	};

	const updateQuantiy = (value: number, item: any) => {
		if (item.quantity + value > 0) {
			dispatch(
				addToCart({
					product: item.product,
					variant: item.variant,
					quantity: value,
				})
			);
		}
	};

	return (
		<>
			{/* Cart Window */}
			<div
				className={`fixed top-0 right-0 h-screen w-1/2 bg-white transition-transform p-4 z-30 ${
					cartState.open
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
							<h2 className="text-2xl font-semibold">My Cart</h2>
							<button
								className="text-storeFrontClr"
								onClick={toggleCartState}
							>
								<BsFillArrowRightCircleFill size={30} />
							</button>
						</div>
						<div className="flex flex-col gap-2  h-96 overflow-y-auto">
							{cartState.cartItems.length > 0 ? (
								<div className="flex flex-col gap-4">
									{cartState.cartItems.map((item: any) => (
										<div
											key={item?.product?.id}
											className="relative flex gap-4 items-center justify-between"
										>
											<div className="flex gap-6">
												<div>
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
														className="w-24 h-24 rounded object-cover"
													/>
												</div>
												<div className="flex flex-col gap-1">
													<div className="text-base font-semibold">
														{item.product.name}
													</div>
													{item.variant && (
														<div className="text-xs font-medium text-gray-500">
															Variant:{" "}
															{item.variant.name}
														</div>
													)}
													<div className="flex gap-2 items-center pt-2">
														<button
															onClick={() =>
																updateQuantiy(
																	-1,
																	item
																)
															}
															className="border border-storeFrontClr px-1.5 py-0.5 rounded font-semibold text-sm text-gray-700"
														>
															-
														</button>
														<div className="border border-storeFrontClr px-1.5 py-0.5 rounded font-semibold text-sm text-gray-700">
															{item.quantity}
														</div>
														<button
															onClick={() =>
																updateQuantiy(
																	1,
																	item
																)
															}
															className="border border-storeFrontClr px-1.5 py-0.5 rounded font-semibold text-sm text-gray-700"
														>
															+
														</button>
													</div>
												</div>
											</div>
											<div className="flex flex-col gap-1">
												<div className="text-lg font-medium">
													Rs.{" "}
													{(item.variant
														? item.variant
																.selling_price
														: item.product
																.selling_price) *
														item.quantity}
												</div>
												<button
													onClick={() =>
														removeItem(item)
													}
													className="text-white text-sm bg-storeFrontClr rounded-full py-0.5 px-2 flex gap-1 items-center"
												>
													<RiDeleteBin6Line />
													<span>Remove</span>
												</button>
											</div>
										</div>
									))}
								</div>
							) : (
								<div className="text-center text-2xl font-semibold text-gray-500">
									Your cart is empty
								</div>
							)}
						</div>
					</div>
					<div className="flex flex-col gap-2 border-t border-storeFrontClr pt-4">
						<div>
							<div className="flex justify-between items-center">
								<div className="text-lg font-semibold">
									Total
								</div>
								<div className="text-lg">
									Rs.{" "}
									{cartState.cartItems.reduce(
										(acc: number, item: any) =>
											acc +
											(item.variant
												? item.variant.selling_price
												: item.product.selling_price) *
												item.quantity,
										0
									)}
								</div>
							</div>
						</div>
						<StoreFrontButton
							onClick={() => {
								toggleCartState();
								setOpen(true);
							}}
							className="w-full"
						>
							Checkout
						</StoreFrontButton>
					</div>
				</div>
			</div>

			{/* Dark Overlay */}
			{cartState.open && (
				<div
					className="fixed z-20 top-0 left-0 w-full h-screen bg-black opacity-50"
					onClick={toggleCartState}
				/>
			)}
		</>
	);
};

export default Cart;
