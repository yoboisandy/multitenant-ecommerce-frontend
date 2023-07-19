import { yupResolver } from "@hookform/resolvers/yup";
import { DashboardButton } from "../../Shared/Buttons/Buttons";
import SelectField from "../../Shared/Inputs/SelectField";
import { TextField } from "../../Shared/Inputs/TextFields";
import { TableLayout } from "../../Shared/Table/Table";
import AddProductCard from "../Products/ProductCreate/AddProductCard";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { initialValues, storeSettingValidation } from "./helper";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
	getCurrentStore,
	updateStoreSetting,
} from "../../../app/Feature/Store/StoreApi";
import { getCategories } from "../../../app/Feature/StoreCategory/StoreCategoryApi";

const Settings = () => {
	const dispatch = useAppDispatch();
	const storeState: any = useAppSelector((state) => state.StoreSlice);
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		setValue,
		getValues,
		setError,
	} = useForm({
		defaultValues: initialValues,
		mode: "onChange",
		resolver: yupResolver(storeSettingValidation),
	});

	useEffect(() => {
		dispatch(getCurrentStore());
		dispatch(getCategories());
	}, []);

	useEffect(() => {
		if (storeState.current_store) {
			setValue("store_name", storeState.current_store?.store_name);
			setValue(
				"store_category_id",
				storeState.current_store?.store_category_id
			);
			setValue("phone", storeState.current_store?.phone);
			setValue("address", storeState.current_store?.address);
			setValue("store_fb", storeState.current_store?.setting?.store_fb);
			setValue("store_ig", storeState.current_store?.setting?.store_ig);
			setValue(
				"store_tiktok",
				storeState.current_store?.setting?.store_tiktok
			);
			setValue(
				"store_whatsapp",
				storeState.current_store?.setting?.store_whatsapp
			);
			setValue(
				"delivery_charge",
				storeState.current_store?.setting?.delivery_charge
			);
			setValue(
				"delivery_time",
				storeState.current_store?.setting?.delivery_time
			);
		}
	}, [storeState.current_store]);

	const onSubmit = (data: any) => {
		let request = {
			store_name: data.store_name,
			store_category_id: data.store_category_id,
			phone: data.phone,
			address: data.address,
			setting: {
				store_fb: data.store_fb,
				store_ig: data.store_ig,
				store_tiktok: data.store_tiktok,
				store_whatsapp: data.store_whatsapp,
				delivery_charge: data.delivery_charge,
				delivery_time: data.delivery_time,
			},
		};

		dispatch(updateStoreSetting(request));
	};

	return (
		<div className="space-y-2">
			<div className="px-2 text-lg font-semibold text-gray-500">
				Settings
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex gap-4 flex-col">
					<AddProductCard>
						<div className="space-y-2">
							<div className="text-lg font-semibold text-gray-500">
								Store Details
							</div>
							<div className="flex flex-wrap gap-4">
								<div className="w-[49%]">
									<TextField
										focusOutline={
											"focus:outline-dashboardClr"
										}
										register={register}
										text="Store Name"
										name="store_name"
										placeholder="Store Name"
										type="text"
										error={errors.store_name?.message}
										required
									/>
								</div>
								<div className="w-[49%]">
									<SelectField
										focusOutline={
											"focus:outline-dashboardClr"
										}
										register={register}
										selected={getValues(
											"store_category_id"
										)}
										text="Store Category"
										name="store_category_id"
										options={storeState.store_categories}
										type="text"
										error={
											errors.store_category_id?.message
										}
										required
									/>
								</div>
								<div className="w-[49%]">
									<TextField
										focusOutline={
											"focus:outline-dashboardClr"
										}
										register={register}
										text="Contact Number"
										name="phone"
										placeholder="Contact Number"
										type="text"
									/>
								</div>
								<div className="w-[49%]">
									<TextField
										focusOutline={
											"focus:outline-dashboardClr"
										}
										register={register}
										text="Store Address"
										name="address"
										placeholder="Store Address"
										type="text"
									/>
								</div>
							</div>
						</div>
					</AddProductCard>
					<AddProductCard>
						<div className="space-y-2">
							<div className="text-lg font-semibold text-gray-500">
								Social Accounts
							</div>
							<div className="flex flex-wrap gap-4">
								<div className="w-[49%]">
									<TextField
										focusOutline={
											"focus:outline-dashboardClr"
										}
										register={register}
										text="Facebook"
										name="store_fb"
										placeholder="eg. https://facebook.com/mecomm"
										type="url"
									/>
								</div>
								<div className="w-[49%]">
									<TextField
										focusOutline={
											"focus:outline-dashboardClr"
										}
										register={register}
										text="Instagram"
										name="store_ig"
										placeholder="eg. https://instagram.com/mecomm"
										type="url"
									/>
								</div>
								<div className="w-[49%]">
									<TextField
										focusOutline={
											"focus:outline-dashboardClr"
										}
										register={register}
										text="TiKTok"
										name="store_tiktok"
										placeholder="eg. https://tiktok.com/mecomm"
										type="url"
									/>
								</div>
								<div className="w-[49%]">
									<TextField
										focusOutline={
											"focus:outline-dashboardClr"
										}
										register={register}
										text="Whatsapp Number"
										name="store_whatsapp"
										placeholder="eg. +9779800000000"
										type="url"
									/>
								</div>
							</div>
						</div>
					</AddProductCard>
					<AddProductCard>
						<div className="space-y-2">
							<div className="text-lg font-semibold text-gray-500">
								Delivery Charge
							</div>
							<div className="flex flex-wrap gap-4">
								<div className="w-[49%]">
									<TextField
										focusOutline={
											"focus:outline-dashboardClr"
										}
										register={register}
										text="Delivery Charge"
										name="delivery_charge"
										type="number"
									/>
								</div>
								<div className="w-[49%]">
									<SelectField
										focusOutline={
											"focus:outline-dashboardClr"
										}
										register={register}
										text="Delivery Time"
										options={[
											{
												value: "Same Day",
												text: "Same Day",
											},
											{
												value: "1-3 Days",
												text: "1-3 Days",
											},
											{
												value: "2-5 Days",
												text: "2-5 Days",
											},
											{
												value: "5+ Days",
												text: "5+ Days",
											},
										]}
										name="delivery_time"
										placeholder="eg. +9779800000000"
									/>
								</div>
							</div>
						</div>
					</AddProductCard>
					<div>
						<DashboardButton
							loading={storeState?.update_current_store_loading}
							className={`rounded`}
							type="submit"
						>
							Save
						</DashboardButton>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Settings;
