import AddProductCard from "./AddProductCard";
import { TextField } from "../../../Shared/Inputs/TextFields";
import Editor from "../../../Shared/Inputs/Editor";
import { useState } from "react";
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

const ProductCreate = () => {
	const [content, setContent] = useState("");
	const [showEditVariantModal, setShowEditVariantModal] = useState(false);

	const onChangeVariants = (option: any, actionMeta: any) => {
		console.log(option, actionMeta);
	};

	return (
		<div className="flex flex-col gap-4">
			<div>
				<div className="flex gap-2 items-center pl-1">
					<AiOutlineLeft
						className=" text-xl cursor-pointer"
						size={20}
					/>
					<h1 className="text-xl font-bold">Add Product</h1>
				</div>
			</div>
			<form className="flex flex-col gap-4">
				<div className="flex gap-5 flex-wrap">
					<div className="flex gap-4 w-[49%] h-fit flex-col">
						<AddProductCard>
							<div className="flex flex-col gap-4">
								<TextField
									required
									name="name"
									text="Product Name"
									placeholder="Enter product name"
									focusOutline={"focus:outline-dashboardClr"}
								/>
								<div className="">
									<Editor
										required
										setContent={setContent}
										content={content}
										name="description"
										text="Product Description"
									/>
								</div>
								<SelectField
									required
									name="category"
									text="Category"
									focusOutline={"focus:outline-dashboardClr"}
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
									name="selling_price"
									text="Selling Price"
									placeholder="eg: 1000"
									type="number"
									focusOutline={"focus:outline-dashboardClr"}
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
									name="quantity"
									text="Quantity"
									placeholder="eg: 10"
									type="number"
									focusOutline={"focus:outline-dashboardClr"}
								/>
								<TextField
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
							</div>
						</AddProductCard>
						<AddProductCard>
							<div className="space-y-4">
								<div className="text-md font-md">
									Product Options
								</div>
								<div className="space-y-2">
									<Checkbox text="Colors" />
									<MultiCreatableSelect
										name="tags"
										onChange={onChangeVariants}
										placeholder="Select or create colors"
										focusOutline={"border-dashboardClr"}
									/>
								</div>
								<div className="space-y-2">
									<Checkbox text="Size" />
									<MultiCreatableSelect
										name="tags"
										onChange={onChangeVariants}
										placeholder="Select or create sizes"
										focusOutline={"border-dashboardClr"}
									/>
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
								save
							</DashboardButton>
						</div>
					</ModalFooter>
				</form>
			</Modal>
		</div>
	);
};

export default ProductCreate;
