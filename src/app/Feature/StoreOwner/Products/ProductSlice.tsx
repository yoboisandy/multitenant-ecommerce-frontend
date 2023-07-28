import { createSlice } from "@reduxjs/toolkit";
import {
	addProduct,
	deleteProduct,
	getProductById,
	getProducts,
	getProductsByCategory,
} from "./ProductApi";
import { getConfigs } from "../../Auth/AuthApi";

export const ProductSlice = createSlice({
	name: "Product",
	initialState: {
		products: [],
		searchedProducts: [],
		newArrivals: [],
		trendingProducts: [],
		filteredProducts: [],
		singleProduct: null,
		focusSearch: false,
		add: {
			loading: false,
		},
		get: {
			loading: false,
		},
		getById: {
			loading: false,
		},
		delete: {
			loading: false,
		},
	},
	reducers: {
		clearSingleProduct: (state: any) => {
			state.singleProduct = null;
		},
		searchProducts: (state: any, { payload }: any) => {
			state.searchedProducts = state.products.filter((product: any) => {
				return product?.name
					.toLowerCase()
					.includes(payload.toLowerCase());
			});
		},
		setFocusSearch: (state: any, { payload }: { payload: boolean }) => {
			state.focusSearch = payload;
		},
		filterProducts: (state: any, { payload }: any) => {
			state.filteredProducts = state.products.filter((product: any) => {
				// Check if the product matches the selected category
				const categoryMatch =
					payload.category.length === 0 ||
					payload.category.includes(product.category.id);

				// Check if the product has variants
				if (product.variants && product.variants.length > 0) {
					// Find the minimum and maximum variant selling prices
					const minVariantPrice = Math.min(
						...product.variants.map(
							(variant: any) => variant.selling_price
						)
					);
					const maxVariantPrice = Math.max(
						...product.variants.map(
							(variant: any) => variant.selling_price
						)
					);

					// Check if any variant's selling price is within the selected price range
					const variantPriceMatch =
						minVariantPrice <= payload.price.max;

					// Check if the product name or description contains the search input
					const searchMatch =
						product.name
							.toLowerCase()
							.includes(payload.search.toLowerCase()) ||
						product.description
							.toLowerCase()
							.includes(payload.search.toLowerCase());

					// Return true if all the conditions are met, otherwise, exclude the product from the filtered list
					return categoryMatch && variantPriceMatch && searchMatch;
				} else {
					// If the product doesn't have variants, check the product's selling price
					const priceMatch =
						product.selling_price >= payload.price.min &&
						product.selling_price <= payload.price.max;

					// Check if the product name or description contains the search input
					const searchMatch =
						product.name
							.toLowerCase()
							.includes(payload.search.toLowerCase()) ||
						product.description
							.toLowerCase()
							.includes(payload.search.toLowerCase());

					// Return true if all the conditions are met, otherwise, exclude the product from the filtered list
					return categoryMatch && priceMatch && searchMatch;
				}
			});
		},
	},
	extraReducers: (builder: any) => {
		builder.addCase(addProduct.pending, (state: any, action: any) => {
			state.add.loading = true;
		});
		builder.addCase(addProduct.fulfilled, (state: any, action: any) => {
			state.add.loading = false;
		});
		builder.addCase(addProduct.rejected, (state: any, action: any) => {
			state.add.loading = false;
		});
		builder.addCase(getProducts.pending, (state: any, action: any) => {
			state.get.loading = true;
		});
		builder.addCase(getProducts.fulfilled, (state: any, action: any) => {
			state.get.loading = false;
			state.products = action.payload.data;
		});
		builder.addCase(getProducts.rejected, (state: any, action: any) => {
			state.get.loading = false;
		});
		builder.addCase(getProductById.pending, (state: any, action: any) => {
			state.getById.loading = true;
		});
		builder.addCase(getProductById.fulfilled, (state: any, action: any) => {
			state.getById.loading = false;
			state.singleProduct = action.payload.data;
		});
		builder.addCase(getProductById.rejected, (state: any, action: any) => {
			state.getById.loading = false;
		});
		builder.addCase(deleteProduct.pending, (state: any, action: any) => {
			state.delete.loading = true;
		});
		builder.addCase(deleteProduct.fulfilled, (state: any, action: any) => {
			state.delete.loading = false;
			state.products = state.products.filter(
				(product: any) => product.id !== action.payload.data.id
			);
		});
		builder.addCase(deleteProduct.rejected, (state: any, action: any) => {
			state.delete.loading = false;
		});
		builder.addCase(getConfigs.fulfilled, (state: any, action: any) => {
			state.newArrivals = action.payload.data.newArrivals;
			state.trendingProducts = action.payload.data.trendingProducts;
			state.products = action.payload.data.products;
		});
		builder.addCase(
			getProductsByCategory.pending,
			(state: any, action: any) => {
				state.get.loading = true;
			}
		);
	},
});

export default ProductSlice.reducer;
export const {
	clearSingleProduct,
	searchProducts,
	setFocusSearch,
	filterProducts,
} = ProductSlice.actions;