import React, { useEffect, useState } from "react";
import { TextArea, TextField } from "../../../Shared/Inputs/TextFields";
import SelectField from "../../../Shared/Inputs/SelectField";
import { StoreFrontButton } from "../../../Shared/Buttons/Buttons";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { initialValues, placeOrderValidationSchema } from "./helper";
import { createOrder } from "../../../../app/Feature/Order/OrderApi";
import { clearCart } from "../../../../app/Feature/Cart/CartSlice";
import CheckoutSuccess from "./CheckoutSuccess";
import { useNavigate } from "react-router-dom";

const CheckoutComp = () => {
	const cartState: any = useAppSelector((state) => state.CartSlice);
	const storeState: any = useAppSelector((state) => state.StoreSlice);
	const orderState: any = useAppSelector((state) => state.OrderSlice);
	const [showSuccess, setShowSuccess] = useState(false);
	const [checkoutSuccessData, setCheckoutSuccessData] = useState({} as any);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: initialValues,
		mode: "onChange",
		resolver: yupResolver(placeOrderValidationSchema),
	});

	const onSubmit = (data: any) => {
		data.products = cartState.cartItems.map((item: any) => {
			return {
				id: item.product.id,
				variant_id: item.variant ? item.variant.id : null,
				quantity: item.quantity,
			};
		});
		console.log(data);
		dispatch(createOrder(data)).then((res: any) => {
			if (res.payload.success) {
				setShowSuccess(true);
				setCheckoutSuccessData({
					quantity: res.payload.data.quantity,
					price: res.payload.data.price,
				});
				dispatch(clearCart());
			}
			console.log(res);
		});
	};

	useEffect(() => {
		if (cartState.cartItems.length === 0) {
			navigate("/");
		}
	}, [navigate]);

	if (showSuccess) {
		return <CheckoutSuccess checkoutData={checkoutSuccessData} />;
	} else {
		return (
			<div className="space-y-8">
				<h1 className="text-left text-gray-600 uppercase font-bold text-xl">
					Checkout
				</h1>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="grid grid-cols-1 md:grid-cols-2 gap-8"
				>
					{/* Form Section */}
					<div className="space-y-4">
						<h2 className="text-left text-gray-600 capitalize font-bold text-xl">
							Shipping Information
						</h2>
						<div className="grid grid-cols-1 gap-4">
							<div className="space-y-4">
								<div className="font-semibold text-gray-600">
									1. Contact information
								</div>
								<div className="flex gap-2 flex-wrap">
									<TextField
										required
										text="Full Name"
										name="customer_name"
										focusOutline={
											"focus:outline-storeFrontClr"
										}
										register={register}
										error={errors.customer_name?.message}
									/>
									<TextField
										required
										text="Email"
										name="customer_email"
										focusOutline={
											"focus:outline-storeFrontClr"
										}
										register={register}
										error={errors.customer_email?.message}
									/>
									<TextField
										required
										text="Mobile Number"
										name="customer_phone"
										focusOutline={
											"focus:outline-storeFrontClr"
										}
										register={register}
										error={errors.customer_phone?.message}
									/>
								</div>
							</div>
							<div className="grid grid-cols-1 gap-4">
								<div className="space-y-4">
									<div className="font-semibold text-gray-600">
										2. Shipping address
									</div>
									<div className="flex gap-2 flex-wrap">
										<TextField
											required
											text="Province"
											name="customer_address_province"
											focusOutline={
												"focus:outline-storeFrontClr"
											}
											register={register}
											error={
												errors.customer_address_province
													?.message
											}
										/>
										<TextField
											required
											text="City"
											name="customer_address_city"
											focusOutline={
												"focus:outline-storeFrontClr"
											}
											register={register}
											error={
												errors.customer_address_city
													?.message
											}
										/>
										<TextField
											required
											text="Address"
											name="customer_address_area"
											focusOutline={
												"focus:outline-storeFrontClr"
											}
											register={register}
											error={
												errors.customer_address_area
													?.message
											}
										/>
										<TextField
											text="Nearby Landmark"
											name="customer_address_nearby_landmark"
											focusOutline={
												"focus:outline-storeFrontClr"
											}
											register={register}
										/>
									</div>
								</div>
							</div>
							<div className="space-y-2">
								<div className="font-semibold text-gray-600">
									3. Order note
								</div>
								<div className="flex gap-2 flex-wrap">
									<TextArea
										name="order_note"
										focusOutline={
											"focus:outline-storeFrontClr"
										}
										register={register}
									/>
								</div>
							</div>

							<div className="space-y-2">
								<div className="font-semibold text-gray-600">
									4. Payment method
								</div>
								<div>
									<SelectField
										name="payment_method"
										focusOutline={
											"focus:outline-storeFrontClr"
										}
										register={register}
										options={[
											{
												value: "cod",
												text: "Cash on Delivery",
											},
										]}
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Order Summary */}
					<div className="space-y-4">
						<h2 className="text-left text-gray-600 capitalize font-bold text-xl">
							Order Summary
						</h2>
						{/* Replace this section with the actual cart items and total price */}
						<div className="border border-gray-300 p-4 space-y-3">
							{/* Sample cart item */}
							{cartState.cartItems.map((item: any) => {
								return (
									<div
										key={item.product.id}
										className="flex justify-between items-center border-b pb-3"
									>
										<div className="flex items-center space-x-4">
											<img
												src={item.image}
												alt="Product"
												className="w-16 h-16 object-cover rounded"
											/>
											<div>
												<p className="text-gray-600 font-semibold">
													{item.product.name}
												</p>
												{item.variant && (
													<p className="text-gray-500">
														Variant:{" "}
														{item.variant?.name}
													</p>
												)}
												<p className="text-gray-500">
													Rs.{" "}
													{item.variant
														? item.variant
																.selling_price
														: item.product
																.selling_price}{" "}
													x {item.quantity}
												</p>
											</div>
										</div>
										<p className="text-gray-600 font-medium">
											Rs.{" "}
											{(item.variant
												? item.variant.selling_price
												: item.product.selling_price) *
												item.quantity}
										</p>
									</div>
								);
							})}

							{/* Total price */}
							<div className="flex flex-col mt-4 gap-2">
								<div className="flex justify-between">
									<p>Delivery Charge:</p>
									<p className="font-semibold">
										Rs.{" "}
										{storeState.current_store.setting
											.delivery_charge || 0}
									</p>
								</div>
								<div className="flex justify-between">
									<p>Total:</p>
									<p className="font-semibold">
										Rs.{" "}
										{cartState.cartItems.reduce(
											(acc: number, item: any) =>
												acc +
												(item.variant
													? item.variant.selling_price
													: item.product
															.selling_price) *
													item.quantity,
											0
										) +
											storeState.current_store.setting
												.delivery_charge || 0}
									</p>
								</div>
							</div>
							{/* Place Order Button */}
							<div className="w-full mt-5">
								<StoreFrontButton
									loading={orderState.create.loading}
									className={"w-full"}
								>
									Place Order
								</StoreFrontButton>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
};

export default CheckoutComp;
