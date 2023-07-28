import React, { useEffect, useState } from "react";
import ProductSection from "../../../components/LandingPage/Store/Shared/ProductSections/ProductSection";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import StoreFrontLayout from "../../../components/LandingPage/Store/Shared/Layout/StoreFrontLayout";
import DefaultNav from "../../../components/LandingPage/Store/Shared/Navbars/DefaultNav";
import StoreFooter from "../../../components/LandingPage/Store/Shared/Footer/StoreFooter";
import { searchProducts } from "../../../app/Feature/StoreOwner/Products/ProductSlice";
import { useParams, useSearchParams } from "react-router-dom";

const ProductListPage = ({ title }: any) => {
	const productState: any = useAppSelector(
		(store: any) => store.ProductSlice
	);
	const categoryState: any = useAppSelector(
		(store: any) => store.CategorySlice
	);
	const dispatch = useAppDispatch();
	const [products, setProducts] = useState<any>([]);
	const [pageTitle, setPageTitle] = useState<any>("");
	const [categoryName, setCategoryName] = useState<any>("");
	// get query params
	const [searchParams]: any = useSearchParams();
	const q = searchParams.get("q");
	const { id } = useParams();

	useEffect(() => {
		if (title === "New Arrivals") {
			setProducts(productState.newArrivals);
		} else if (title === "Trending Products") {
			setProducts(productState.trendingProducts);
		} else if (title === "Search Results") {
			setProducts(productState.searchedProducts);
		} else if (title === "Category") {
			setProducts(
				productState.products?.filter((product: any) => {
					return product?.category?.id === id;
				})
			);
			setCategoryName(
				categoryState.categories.find(
					(category: any) => category.id === id
				)?.name
			);
		}
	}, [dispatch, title, q, id]);

	return (
		<StoreFrontLayout>
			<div className="py-10">
				<ProductSection
					title={
						title === "Search Results"
							? `Search Results For "${q}"`
							: title === "Category"
							? `Category: ${categoryName}`
							: title
					}
					products={products}
				/>
			</div>
		</StoreFrontLayout>
	);
};

export default ProductListPage;
