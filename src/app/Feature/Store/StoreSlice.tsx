import { createSlice } from "@reduxjs/toolkit";
import { checkStoreReady, createStore, verifyStore } from "./StoreApi";
import { getCategories } from "../StoreCategory/StoreCategoryApi";

export const StoreSlice = createSlice({
	name: "Store",
	initialState: {
		loading: false,
		req_success: false,
		verify_loading: false,
		verify_success: false,
		verify_failed: false,
		store_ready: false,
		store_ready_failed: false,
		store_ready_loading: false,
		store_ready_success: false,
		store_categories: [],
		store_categories_loading: false,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(createStore.pending, (state) => {
			state.loading = true;
			state.req_success = false;
		});
		builder.addCase(createStore.fulfilled, (state) => {
			state.loading = false;
			state.req_success = true;
		});
		builder.addCase(createStore.rejected, (state) => {
			state.loading = false;
			state.req_success = false;
		});
		builder.addCase(verifyStore.pending, (state) => {
			state.verify_loading = true;
			state.verify_success = false;
			state.verify_failed = false;
		});
		builder.addCase(verifyStore.fulfilled, (state) => {
			state.verify_loading = false;
			state.verify_success = true;
			state.verify_failed = false;
		});
		builder.addCase(verifyStore.rejected, (state) => {
			state.verify_loading = false;
			state.verify_success = false;
			state.verify_failed = true;
		});
		builder.addCase(checkStoreReady.pending, (state) => {
			state.store_ready = false;
			state.store_ready_failed = false;
			state.store_ready_loading = true;
			state.store_ready_success = false;
		});
		builder.addCase(checkStoreReady.fulfilled, (state) => {
			state.store_ready = true;
			state.store_ready_failed = false;
			state.store_ready_loading = false;
			state.store_ready_success = true;
		});
		builder.addCase(checkStoreReady.rejected, (state) => {
			state.store_ready = false;
			state.store_ready_failed = true;
			state.store_ready_loading = false;
			state.store_ready_success = false;
		});
		builder.addCase(getCategories.pending, (state) => {
			state.store_categories = [];
			state.store_categories_loading = true;
		});
		builder.addCase(getCategories.fulfilled, (state, action) => {
			state.store_categories = action.payload.data.map((item: any) => ({
				value: item.id,
				text: item.name,
			}));
			state.store_categories_loading = false;
		});
		builder.addCase(getCategories.rejected, (state) => {
			state.store_categories = [];
			state.store_categories_loading = false;
		});
	},
});

export default StoreSlice.reducer;
