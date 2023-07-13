import { createSlice } from "@reduxjs/toolkit";
import { addProduct } from "./ProductApi";

export const ProductSlice = createSlice({
	name: "Product",
	initialState: {
		products: [],
		add: {
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
	},
});
