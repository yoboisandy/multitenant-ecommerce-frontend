import React, { useEffect, useState } from "react";
import {
	TBody,
	THead,
	Table,
	TableActions,
	TableLayout,
} from "../../../Shared/Table/Table";
import { SearchBox } from "../../../Shared/Inputs/TextFields";
import { DashboardButton, FilterButton } from "../../../Shared/Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import {
	deleteProduct,
	getProducts,
} from "../../../../app/Feature/StoreOwner/Products/ProductApi";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import DeleteModal from "../../../Shared/Modals/DeleteModal";

const ProductsTable = () => {
	const navigate = useNavigate();
	const statuses = ["Active", "Draft"];
	const [selectedStatus, setSelectedStatus] = useState(statuses[0]);
	const [selectedProduct, setSelectedProduct] = useState<any>(null);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const dispatch = useAppDispatch();
	const productState: any = useAppSelector((state) => state.ProductSlice);

	const headingLeft = (
		<>
			<SearchBox placeholder="Search..." className="w-[200px] h-[30px]" />
			<DashboardButton
				onClick={() => navigate("/products/add")}
				className={"w-full rounded"}
			>
				Add Product
			</DashboardButton>
		</>
	);

	const filterButtons = (
		<div className="flex items-center gap-2">
			{statuses.map((status) => (
				<FilterButton
					onClick={() => setSelectedStatus(status)}
					selected={selectedStatus === status}
					key={status}
				>
					{status}
				</FilterButton>
			))}
		</div>
	);

	useEffect(() => {
		dispatch(getProducts({ status: selectedStatus }));
	}, [dispatch, selectedStatus]);

	const handleDelete = () => {
		dispatch(deleteProduct({ id: selectedProduct.id })).then((res) => {
			if (res.payload.success) {
				setShowDeleteModal(false);
				setSelectedProduct(null);
			}
		});
	};

	return (
		<TableLayout
			heading="Products"
			headingLeft={headingLeft}
			belowHeading={filterButtons}
		>
			<Table>
				<THead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Price</th>
						<th>Inventory</th>
						<th>Status</th>
						<th>Created</th>
						<th>Actions</th>
					</tr>
				</THead>
				<TBody>
					{!productState.loading &&
						productState.products.length > 0 &&
						productState.products.map(
							(product: any, index: number) => (
								<tr
									key={product.id}
									className="cursor-pointer hover:bg-gray-200"
									onClick={() =>
										navigate(`/products/${product.id}`)
									}
								>
									<td>{++index}</td>
									<td className="flex items-center gap-3">
										<img
											src={
												product.product_images[0]?.image
											}
											className="w-[30px] h-[30px] object-cover"
											alt=""
										/>
										{product.name}
									</td>
									<td>रू {product.selling_price || 0}</td>
									<td>
										{product.variants?.length > 0
											? product.variants.reduce(
													(
														acc: number,
														variant: any
													) => acc + variant.quantity,
													0
											  ) +
											  `
										of ${product.variants.length} variants`
											: product.quantity || 0}
									</td>
									<td>
										{product.status === "active" ? (
											<span className="bg-green-500 px-1.5 py-0.5 text-white rounded-xl text-sm font-semibold">
												Active
											</span>
										) : (
											<span className="bg-red-500 p-1.5 text-white rounded-xl text-sm font-semibold">
												Draft
											</span>
										)}
									</td>
									<td>{product.created_at}</td>
									<TableActions
										onDelete={() => {
											setSelectedProduct(product);
											setShowDeleteModal(true);
										}}
									/>
								</tr>
							)
						)}
				</TBody>
			</Table>
			<DeleteModal
				show={showDeleteModal}
				setShow={setShowDeleteModal}
				onCancel={() => {
					setSelectedProduct(null);
					setShowDeleteModal(false);
				}}
				loading={productState.delete.loading}
				onDelete={handleDelete}
			/>
		</TableLayout>
	);
};

export default ProductsTable;
