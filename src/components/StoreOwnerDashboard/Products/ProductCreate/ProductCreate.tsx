import AddProductCard from "./AddProductCard";
import { TextField } from "../../../Shared/Inputs/TextFields";
import Editor from "../../../Shared/Inputs/Editor";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";
import { FileUploader } from "../../../Shared/FileUploader/FileUploader";
import { RiImageAddLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import ImageUploader from "./ImageUploader";
import ImageHolder from "../../../Shared/Images/ImageHolder";
import SelectField from "../../../Shared/Inputs/SelectField";
const ProductCreate = () => {
	const [content, setContent] = useState("");
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
			<form className="flex gap-5 flex-wrap">
				<div className="flex gap-4 w-[49%] h-fit">
					<AddProductCard>
						<div className="flex flex-col gap-4">
							<TextField
								name="name"
								text="Product Name"
								focusOutline="pink-300"
								placeholder="Enter product name"
							/>
							<div className="">
								<Editor
									setContent={setContent}
									content={content}
									name="description"
									text="Product Description"
								/>
							</div>
							<SelectField
								name="category"
								text="Category"
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
				</div>
				<div className="flex flex-col gap-4 w-[49%] h-fit">
					<AddProductCard>
						<div className="flex flex-col gap-1.5 flex-1 relative">
							<label className="text-md font-md" htmlFor="images">
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
					<AddProductCard></AddProductCard>
				</div>
			</form>
		</div>
	);
};

export default ProductCreate;
