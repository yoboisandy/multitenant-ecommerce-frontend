import { useEffect, useState } from "react";
import {
	DashboardButton,
	MutedButton,
} from "../../../components/Shared/Buttons/Buttons";
import {
	SearchBox,
	TextArea,
	TextField,
} from "../../../components/Shared/Inputs/TextFields";
import DashboardLayout from "../../../components/Shared/Layouts/DashboardLayout";
import {
	TBody,
	THead,
	Table,
	TableActions,
	TableLayout,
} from "../../../components/Shared/Table/Table";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
	addCategory,
	deleteCategory,
	getCategories,
	updateCategory,
} from "../../../app/Feature/StoreOwner/Categories/CategoryApi";
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
} from "../../../components/Shared/Modals/Modal";
import { FileUploader } from "../../../components/Shared/FileUploader/FileUploader";
import { AddCategoryValidationSchema } from "./validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { convert2Base64 } from "../../../utils/filehelper";
import DeleteModal from "../../../components/Shared/Modals/DeleteModal";
import { searchCategories } from "../../../app/Feature/StoreOwner/Categories/CategorySlice";
const Categories = () => {
	const dispatch = useAppDispatch();
	const categoryState = useAppSelector((state) => state.CategorySlice);

	const [showAddModel, setShowAddModel] = useState(false);
	const [currentImageUrl, setCurrentImageUrl] = useState("");
	const [selectedCategory, setSelectedCategory] = useState<any>(null);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [file, setFile] = useState<any>(null);

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	const onCancel = () => {
		setShowAddModel(false);
		setFile(null);
		setShowDeleteModal(false);
		setCurrentImageUrl("");
		if (selectedCategory) {
			setSelectedCategory(null);
		}
		reset();
	};

	const search = (e: any) => {
		const value = e.target.value;
		dispatch(searchCategories(value));
	};

	const headingLeft = (
		<>
			<SearchBox
				placeholder="Search..."
				className="w-[200px] h-[30px]"
				onChange={search}
			/>
			<DashboardButton
				className={"w-full rounded"}
				onClick={() => setShowAddModel(true)}
			>
				Add Category
			</DashboardButton>
		</>
	);

	const getFile = (file: any) => {
		const image = file[0];
		console.log(image);
		if (image) {
			if ([`image/jpeg`, `image/png`].includes(image.type)) {
				setFile(image);
				const result = URL.createObjectURL(image);
				setCurrentImageUrl(result);
				console.log(result);
			} else {
				setError("image", {
					type: "manual",
					message: "Please select a valid image file",
				});
			}
		} else {
			setCurrentImageUrl("");
			setFile(null);
		}
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
		setError,
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(AddCategoryValidationSchema),
	});

	const onSubmit = async (data: any) => {
		if (file) {
			setValue("image", await convert2Base64(file));
		} else {
			setValue("image", null);
		}
		if (selectedCategory) {
			await dispatch(
				updateCategory({ data, id: selectedCategory?.id })
			).then((res: any) => {
				if (res.payload.success) {
					reset();
					onCancel();
				}
			});
		} else {
			await dispatch(addCategory(data)).then((res: any) => {
				if (res.payload.success) {
					reset();
					onCancel();
				}
			});
		}
		console.log(data);
	};

	useEffect(() => {
		if (selectedCategory) {
			setValue("name", selectedCategory.name);
			setValue("description", selectedCategory.description);
			setCurrentImageUrl(selectedCategory.image);
			setFile(selectedCategory.image);
		}
	}, [selectedCategory, setValue]);

	const handleDelete = async () => {
		await dispatch(deleteCategory(selectedCategory.id)).then((res: any) => {
			onCancel();
		});
	};

	return (
		<>
			<DashboardLayout>
				<TableLayout heading="Categories" headingLeft={headingLeft}>
					<Table>
						<THead>
							<tr>
								<th>Category Name</th>
								<th>Image</th>
								<th>Actions</th>
							</tr>
						</THead>
						<TBody>
							{categoryState.categories.map((category: any) => (
								<tr key={category.id}>
									<td>{category.name}</td>
									<td>
										{category.image && (
											<a
												href={category.image}
												target="_blank"
												rel="noreferrer"
											>
												<img
													src={category.image}
													alt={category.name}
													className="w-[50px] h-[50px]"
												/>
											</a>
										)}
									</td>
									<TableActions
										onEdit={() => {
											setShowAddModel(true);
											setSelectedCategory(category);
											setCurrentImageUrl(category.image);
										}}
										onDelete={() => {
											setShowDeleteModal(true);
											setSelectedCategory(category);
										}}
									/>
								</tr>
							))}
						</TBody>
					</Table>
				</TableLayout>
			</DashboardLayout>
			<Modal show={showAddModel}>
				<form
					className="flex flex-col gap-3"
					onSubmit={handleSubmit(onSubmit)}
				>
					<ModalHeader>
						{selectedCategory ? "Edit Category" : "Add Category"}
					</ModalHeader>
					<ModalBody>
						<div className="flex flex-col gap-2">
							<TextField
								text="Category Name"
								register={register}
								error={errors?.name?.message}
								name="name"
								className="w-full"
								focusOutline={"dashboardClr"}
							/>
							<TextArea
								text="Description"
								name="description"
								register={register}
								error={errors?.description?.message}
								className="w-full"
								focusOutline={"dashboardClr"}
							/>
							<FileUploader
								text="Image"
								name="image"
								setFile={setFile}
								register={register}
								error={errors?.image?.message}
								onChange={(e: any) => getFile(e.target.files)}
								currentImageUrl={currentImageUrl}
								setCurrentImageUrl={setCurrentImageUrl}
							/>
						</div>
					</ModalBody>
					<ModalFooter>
						<div className="flex gap-2 justify-end">
							<MutedButton onClick={onCancel}>Cancel</MutedButton>
							<DashboardButton
								loading={
									categoryState.add.loading ||
									categoryState.update.loading
								}
								type="submit"
							>
								{selectedCategory ? "Update" : "Add"}
							</DashboardButton>
						</div>
					</ModalFooter>
				</form>
			</Modal>
			<DeleteModal
				show={showDeleteModal}
				setShow={setShowDeleteModal}
				loading={categoryState.delete.loading}
				onDelete={handleDelete}
				onCancel={onCancel}
			/>
		</>
	);
};

export default Categories;
