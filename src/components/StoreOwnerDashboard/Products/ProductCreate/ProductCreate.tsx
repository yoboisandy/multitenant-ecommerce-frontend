import AddProductCard from "./AddProductCard";
import { TextField } from "../../../Shared/Inputs/TextFields";
import Editor from "../../../Shared/Inputs/Editor";
import { useEffect, useRef, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import ImageUploader from "./ImageUploader";
import ImageHolder from "../../../Shared/Images/ImageHolder";
import SelectField, {
	MultiCreatableSelect,
} from "../../../Shared/Inputs/SelectField";
import * as yup from "yup";
import Checkbox from "../../../Shared/Inputs/Checkbox";
import { TableActions } from "../../../Shared/Table/Table";
import { RiImageAddLine } from "react-icons/ri";
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
} from "../../../Shared/Modals/Modal";
import {
	DashboardButton,
	MutedButton,
	PrimaryButton,
} from "../../../Shared/Buttons/Buttons";
import { FileUploader } from "../../../Shared/FileUploader/FileUploader";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { initialValues } from "./helper";
import { ErrorLabel } from "../../../Shared/Inputs/Errors";
import { DevTool } from "@hookform/devtools";
import { convert2Base64 } from "../../../../utils/filehelper";
import { useAppDispatch } from "../../../../app/hooks";
import { getCategories } from "../../../../app/Feature/StoreOwner/Categories/CategoryApi";

const ProductCreate = () => {
	const isMounted = useRef(false);
	const isMounted2 = useRef(false);
	const [content, setContent] = useState("");
	const [showEditVariantModal, setShowEditVariantModal] = useState(false);
	const [options, setOptions] = useState<any>([]);
	const [variants, setVariants] = useState<any>([]);
	const [images, setImages] = useState<any>([]);
	const [openColorSelector, setOpenColorSelector] = useState(false);
	const [openSizeSelector, setOpenSizeSelector] = useState(false);
	const [variantToEdit, setVariantToEdit] = useState<any>(null);
	const [categories, setCategories] = useState<any>([]);
	const dispatch = useAppDispatch();

	const AddProductValidationSchema = yup.object().shape({
		name: yup.string().required("Product name is a required field"),
		description: yup
			.string()
			.required("Product description is a required field"),
		category_id: yup
			.string()
			.required("Product category is a required field"),
		selling_price:
			variants.length === 0
				? yup
						.number()
						.required("Product selling price is a required field")
				: yup.number().notRequired(),
		images: yup.array().required("Atleast one product image is required"),
		quantity:
			variants.length === 0
				? yup.number().required("Product quantity is a required field")
				: yup.number().notRequired(),
	});

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
		watch,
		setValue,
		getValues,
		setError,
	} = useForm({
		defaultValues: initialValues,
		mode: "onChange",
		resolver: yupResolver(AddProductValidationSchema),
	});
	const selling_price = watch("selling_price");
	const quantity = watch("quantity");
	console.log(errors);

	useEffect(() => {
		if (isMounted.current) {
			console.log(content);
			setValue("description", content);
			const tempContent = content.replace(/(<([^>]+)>)/gi, "");
			if (tempContent.length > 0) {
				setError("description", {});
			} else {
				setError("description", {
					type: "required",
					message: "Product description is a required field",
				});
			}
		} else {
			isMounted.current = true;
		}
	}, [content, setValue, setError]);

	const onSubmit = (data: any) => {
		if (variants.length === 0) {
			if (!selling_price) {
				setError("selling_price", {
					type: "required",
					message: "Product selling price is a required field",
				});
			} else {
				setError("selling_price", {});
			}
			if (!quantity) {
				setError("quantity", {
					type: "required",
					message: "Product quantity is a required field",
				});
			} else {
				setError("quantity", {});
			}
		}
		console.log(data);
	};

	const onChangeColorCheckbox = (e: any) => {
		if (e.target.checked) {
			setOpenColorSelector(true);
			setOptions((prev: any) => {
				return [
					...prev,
					{
						name: "Color",
						options: [],
					},
				];
			});
		}
		if (!e.target.checked) {
			setOpenColorSelector(false);
			setOptions((prev: any) => {
				return prev.filter((item: any) => item.name !== "Color");
			});
		}
	};

	const onChangeSizeCheckbox = (e: any) => {
		if (e.target.checked) {
			setOpenSizeSelector(true);
			setOptions((prev: any) => {
				return [
					...prev,
					{
						name: "Size",
						options: [],
					},
				];
			});
		}
		if (!e.target.checked) {
			setOpenSizeSelector(false);
			setOptions((prev: any) => {
				return prev.filter((item: any) => item.name !== "Size");
			});
		}
	};

	const onChangeColorOptions = (option: any, actionMeta: any) => {
		const allOptions = option.map((item: any) => {
			return item.value;
		});
		setOptions((prev: any) => {
			const index = prev.findIndex((item: any) => item.name === "Color");
			const newOptions = [...prev];
			newOptions[index].options = allOptions;
			return newOptions;
		});
		console.log(options);
	};

	const onChangeSizeOptions = (option: any, actionMeta: any) => {
		const allOptions = option.map((item: any) => {
			return item.value;
		});
		setOptions((prev: any) => {
			const index = prev.findIndex((item: any) => item.name === "Size");
			const newOptions = [...prev];
			newOptions[index].options = allOptions;
			return newOptions;
		});
		console.log(options);
	};

	useEffect(() => {
		setValue("options", options);
		const tempVariants: any = [];
		const sampleVariant = {
			name: "",
			selling_price: getValues("selling_price") || 0,
			cost_price: getValues("cost_price") || 0,
			crossed_price: getValues("crossed_price") || 0,
			quantity: 0,
			sku: "",
		};
		if (options.length > 0) {
			const option1 =
				options.find((el: any) => el.name === "Color")?.options || [];
			const option2 =
				options.find((el: any) => el.name === "Size")?.options || [];

			if (option1.length === 0 && option2.length === 0) {
				// Handle the case when both options' options arrays are empty
				setVariants(tempVariants);
				return;
			}

			if (option1.length === 0) {
				// Handle the case when the first option's options array is empty
				for (let i = 0; i < option2.length; i++) {
					const variantName = option2[i];
					const variant = {
						...sampleVariant,
						name: variantName,
					};

					tempVariants.push(variant);
				}
			} else if (option2.length === 0) {
				// Handle the case when the second option's options array is empty
				for (let i = 0; i < option1.length; i++) {
					const variantName = option1[i];
					const variant = {
						...sampleVariant,
						name: variantName,
					};

					tempVariants.push(variant);
				}
			} else {
				// Handle the case when both options' options arrays are not empty
				for (let i = 0; i < option1.length; i++) {
					for (let j = 0; j < option2.length; j++) {
						const variantName = `${option1[i]}/${option2[j]}`;
						const variant = {
							...sampleVariant,
							name: variantName,
						};

						tempVariants.push(variant);
					}
				}
			}
		}
		setVariants(tempVariants);
	}, [options]);

	useEffect(() => {
		console.log("variants", variants);
		if (variants.length > 0) {
			setValue("variants", variants);
		}
	}, [variants]);

	const handleImageChange = (e: any) => {
		const file = e.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setImages((prev: any) => {
				return [
					...prev,
					{
						image: convert2Base64(file),
						preview: imageUrl,
					},
				];
			});
		}
	};

	const handleImageCancel = (image: any) => {
		setImages((prev: any) => {
			return prev.filter((item: any) => item.image !== image.image);
		});
	};

	useEffect(() => {
		if (isMounted2.current) {
			const imageValue = images.map((item: any) => {
				return item.image;
			});
			if (imageValue.length > 0) {
				setValue("images", imageValue);
				setError("images", {});
			} else {
				setError("images", {
					type: "required",
					message: "Product image is a required field",
				});
			}
		} else {
			isMounted2.current = true;
		}
	}, [images, setValue, setError]);

	useEffect(() => {
		dispatch(getCategories()).then((res: any) => {
			if (res.payload) {
				setCategories(() =>
					res?.payload?.data?.map((item: any) => {
						return {
							value: item.id,
							text: item.name,
						};
					})
				);
			}
		});
	}, [dispatch]);

	return (
		<div className="flex flex-col gap-4">
			<DevTool control={control} />

			<div>
				<div className="flex gap-2 items-center pl-1">
					<AiOutlineLeft
						className=" text-xl cursor-pointer"
						size={20}
					/>
					<h1 className="text-xl font-bold">Add Product</h1>
				</div>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col gap-4"
			>
				<div className="flex gap-5 flex-wrap">
					<div className="flex gap-4 w-[49%] h-fit flex-col">
						<AddProductCard>
							<div className="flex flex-col gap-4">
								<TextField
									required
									register={register}
									name="name"
									text="Product Name"
									placeholder="Enter product name"
									focusOutline={"focus:outline-dashboardClr"}
									error={errors.name?.message}
								/>
								<div className="">
									<Editor
										required
										register={register}
										setContent={setContent}
										content={content}
										name="description"
										text="Product Description"
										error={errors.description?.message}
									/>
								</div>
								<SelectField
									required
									register={register}
									name="category_id"
									text="Category"
									focusOutline={"focus:outline-dashboardClr"}
									error={errors.category_id?.message}
									options={categories}
								/>
							</div>
						</AddProductCard>
						{!(variants.length > 0) && (
							<>
								<AddProductCard>
									<div className="flex flex-col gap-4">
										<TextField
											required
											register={register}
											name="selling_price"
											text="Selling Price"
											placeholder="eg: 1000"
											type="number"
											focusOutline={
												"focus:outline-dashboardClr"
											}
											error={
												errors.selling_price?.message
											}
										/>
										<TextField
											register={register}
											name="cost_price"
											text="Cost Price"
											placeholder="eg: 700"
											type="number"
											focusOutline={
												"focus:outline-dashboardClr"
											}
										/>
										<TextField
											register={register}
											name="crossed_price"
											text="Crossed Price"
											placeholder="eg: 1700"
											type="number"
											focusOutline={
												"focus:outline-dashboardClr"
											}
										/>
									</div>
								</AddProductCard>
								<AddProductCard>
									<div className="flex flex-col gap-4">
										<TextField
											required
											register={register}
											name="quantity"
											text="Quantity"
											placeholder="eg: 10"
											type="number"
											focusOutline={
												"focus:outline-dashboardClr"
											}
											error={errors.quantity?.message}
										/>
										<TextField
											register={register}
											name="sku"
											text="SKU"
											placeholder="eg: 123456"
											type="text"
											focusOutline={
												"focus:outline-dashboardClr"
											}
										/>
									</div>
								</AddProductCard>
							</>
						)}
					</div>
					<div className="flex flex-col gap-4 w-[49%] h-fit">
						<AddProductCard>
							<div className="flex flex-col gap-1.5 flex-1 relative">
								<label
									className="text-md font-md"
									htmlFor="images"
								>
									Product Images
								</label>
								<div className="flex flex-wrap gap-x-2 gap-y-4">
									{images &&
										images.length > 0 &&
										images.map(
											(image: any, index: number) => (
												<ImageHolder
													key={index}
													onCancel={() =>
														handleImageCancel(image)
													}
													url={image.preview}
												/>
											)
										)}
									<ImageUploader
										onChange={handleImageChange}
										name="images"
									/>
								</div>
								<ErrorLabel error={errors.images?.message} />
							</div>
						</AddProductCard>
						<AddProductCard>
							<div className="space-y-4">
								<div className="text-md font-md">
									Product Options
								</div>
								<div className="space-y-2">
									<Checkbox
										onChange={onChangeColorCheckbox}
										text="Colors"
									/>
									{openColorSelector && (
										<MultiCreatableSelect
											name="tags"
											onChange={onChangeColorOptions}
											placeholder="Select or create colors"
											focusOutline={"border-dashboardClr"}
										/>
									)}
								</div>
								<div className="space-y-2">
									<Checkbox
										onChange={onChangeSizeCheckbox}
										text="Size"
									/>
									{openSizeSelector && (
										<MultiCreatableSelect
											name="tags"
											onChange={onChangeSizeOptions}
											placeholder="Select or create sizes"
											focusOutline={"border-dashboardClr"}
										/>
									)}
								</div>
							</div>
						</AddProductCard>
						{variants && variants.length > 0 && (
							<AddProductCard>
								<div className="space-y-4">
									<div className="text-md font-md">
										Product Variants
									</div>
									<div className="rounded-lg">
										<table className="w-full border">
											<thead>
												<tr className="text-white">
													<th className="text-left">
														Variant
													</th>
													<th className="text-left">
														Actions
													</th>
												</tr>
											</thead>
											<tbody>
												{variants &&
													variants.length > 0 &&
													variants.map(
														(variant: any) => {
															return (
																<tr
																	key={
																		variant.name
																	}
																>
																	<td className="text-left">
																		<div className="flex gap-2">
																			<div className="text-gray-300">
																				{/* <RiImageAddLine className="text-5xl cursor-pointer" /> */}
																				<img
																					src="https://static-01.daraz.com.np/p/447ebe1702d059dd2c58c315deebd657.jpg_720x720.jpg_.webp"
																					className="h-[50px] w-[50px] object-contain"
																					alt=""
																				/>
																			</div>
																			<div className="flex flex-col justify-center">
																				<div className="tracking-widest">
																					{
																						variant.name
																					}
																				</div>
																				<div className="flex gap-2">
																					<span className="text-gray-400 line-through tracking-widest">
																						Rs.
																						{
																							variant.crossed_price
																						}
																					</span>
																					<span className="text-dashboardClr tracking-widest">
																						Rs.
																						{
																							variant.selling_price
																						}
																					</span>
																				</div>
																			</div>
																		</div>
																	</td>
																	<TableActions
																		onEdit={() => {
																			setVariantToEdit(
																				variant
																			);
																			setShowEditVariantModal(
																				true
																			);
																		}}
																	/>
																</tr>
															);
														}
													)}
											</tbody>
										</table>
									</div>
								</div>
							</AddProductCard>
						)}
						<AddProductCard>
							<SelectField
								required
								register={register}
								name="status"
								text="Status"
								options={[
									{ value: "active", text: "Active" },
									{ value: "draft", text: "Draft" },
								]}
								focusOutline={"focus:outline-dashboardClr"}
							/>
						</AddProductCard>
					</div>
				</div>
				<div>
					<DashboardButton text="Save" type="submit">
						Save Product
					</DashboardButton>
				</div>
			</form>
			<Modal
				show={showEditVariantModal}
				title="Add Variant"
				size="lg:max-w-[800px]"
			>
				<form
					className="flex flex-col gap-3"
					// onSubmit={handleSubmit(onSubmit)}
				>
					<ModalHeader>Edit Variant | Green/md</ModalHeader>
					<ModalBody>
						<div className="flex flex-col gap-4">
							<TextField
								required
								name="selling_price"
								id="variant_selling_price"
								text="Selling Price"
								placeholder="eg: 1000"
								type="number"
								focusOutline={"focus:outline-dashboardClr"}
							/>
							<TextField
								name="crossed_price"
								id="variant_crossed_price"
								text="Crossed Price"
								placeholder="eg: 1700"
								type="number"
								focusOutline={"focus:outline-dashboardClr"}
							/>
							<TextField
								name="cost_price"
								id="variant_cost_price"
								text="Cost Price"
								placeholder="eg: 700"
								type="number"
								focusOutline={"focus:outline-dashboardClr"}
							/>
							<TextField
								name="quantity"
								id="variant_quantity"
								text="Variant Quantity"
								placeholder="eg: 1700"
								type="number"
								focusOutline={"focus:outline-dashboardClr"}
							/>
							<TextField
								name="sku"
								id="variant_sku"
								text="Variant SKU"
								placeholder="eg: 1700"
								type="text"
								focusOutline={"focus:outline-dashboardClr"}
							/>
							<FileUploader name="image" text="Images" />
						</div>
					</ModalBody>
					<ModalFooter>
						<div className="flex gap-2 justify-end">
							<MutedButton
								onClick={() => {
									setShowEditVariantModal(false);
								}}
							>
								Cancel
							</MutedButton>
							<DashboardButton type="submit">
								Save
							</DashboardButton>
						</div>
					</ModalFooter>
				</form>
			</Modal>
		</div>
	);
};

export default ProductCreate;
