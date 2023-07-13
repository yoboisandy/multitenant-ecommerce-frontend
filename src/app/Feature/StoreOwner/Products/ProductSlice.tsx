import { createSlice } from "@reduxjs/toolkit";
import { addProduct, getProducts } from "./ProductApi";

export const ProductSlice = createSlice({
	name: "Product",
	initialState: {
		products: [],
		add: {
			loading: false,
		},
		get: {
			loading: false,
		},
	},
	reducers: {},
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
	},
});

export default ProductSlice.reducer;