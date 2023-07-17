import { createSlice } from "@reduxjs/toolkit";
import { addProduct, getProductById, getProducts } from "./ProductApi";

export const ProductSlice = createSlice({
	name: "Product",
	initialState: {
		products: [],
		singleProduct: null,
		add: {
			loading: false,
		},
		get: {
			loading: false,
		},
		getById: {
			loading: false,
		},
	},
	reducers: {
		clearSingleProduct: (state: any) => {
			state.singleProduct = null;
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
	},
});

export default ProductSlice.reducer;
export const { clearSingleProduct } = ProductSlice.actions;