import AddProductCard from "./AddProductCard";
import { TextField } from "../../../Shared/Inputs/TextFields";
import Editor from "../../../Shared/Inputs/Editor";
import { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import ImageUploader from "./ImageUploader";
import ImageHolder from "../../../Shared/Images/ImageHolder";
import SelectField, {
	MultiCreatableSelect,
} from "../../../Shared/Inputs/SelectField";
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
import { AddProductValidationSchema, initialValues } from "./helper";
import { ErrorLabel } from "../../../Shared/Inputs/Errors";
import { DevTool } from "@hookform/devtools";

const ProductCreate = () => {
	const [content, setContent] = useState("");
	const [showEditVariantModal, setShowEditVariantModal] = useState(false);
	const [options, setOptions] = useState<any>([]);
	const [variants, setVariants] = useState<any>([]);
	const [images, setImages] = useState<any>([]);
	const [openColorSelector, setOpenColorSelector] = useState(false);
	const [openSizeSelector, setOpenSizeSelector] = useState(false);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
		setValue,
		setError,
	} = useForm({
		defaultValues: initialValues,
		mode: "onChange",
		resolver: yupResolver(AddProductValidationSchema),
	});

	useEffect(() => {
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
	}, [content, setValue]);

	const onSubmit = (data: any) => {
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
									options={[
										{
											value: "1",
											text: "Category 1",
										},
										{
											value: "2",
											text: "Category 2",
										},
									]}
								/>
							</div>
						</AddProductCard>
						<AddProductCard>
							<div className="flex flex-col gap-4">
								<TextField
									required
									register={register}
									name="selling_price"
									text="Selling Price"
									placeholder="eg: 1000"
									type="number"
									focusOutline={"focus:outline-dashboardClr"}
									error={errors.selling_price?.message}
								/>
								<TextField
									name="cost_price"
									text="Cost Price"
									placeholder="eg: 700"
									type="number"
									focusOutline={"focus:outline-dashboardClr"}
								/>
								<TextField
									name="crossed_price"
									text="Crossed Price"
									placeholder="eg: 1700"
									type="number"
									focusOutline={"focus:outline-dashboardClr"}
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
									focusOutline={"focus:outline-dashboardClr"}
									error={errors.quantity?.message}
								/>
								<TextField
									register={register}
									name="sku"
									text="SKU"
									placeholder="eg: 123456"
									type="text"
									focusOutline={"focus:outline-dashboardClr"}
								/>
							</div>
						</AddProductCard>
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
								<div className="flex gap-2">
									<ImageHolder
										onCancel={() => {}}
										url="https://static-01.daraz.com.np/p/447ebe1702d059dd2c58c315deebd657.jpg_720x720.jpg_.webp"
									/>
									<ImageUploader name="images" />
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
											<tr>
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
															<div>Green/sm</div>
															<div className="flex gap-2">
																<span className="text-gray-400 line-through">
																	Rs.1000
																</span>
																<span className="text-dashboardClr">
																	Rs.700
																</span>
															</div>
														</div>
													</div>
												</td>
												<TableActions
													onEdit={() =>
														setShowEditVariantModal(
															true
														)
													}
												/>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</AddProductCard>
						<AddProductCard>
							<SelectField
								required
								register={register}
								name="status"
								text="Status"
								options={[
									{ value: "active", text: "Active" },
									{ value: "inactive", text: "Inactive" },
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
