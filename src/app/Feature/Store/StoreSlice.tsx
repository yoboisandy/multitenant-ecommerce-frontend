import { createSlice } from "@reduxjs/toolkit";
import {
	checkStoreReady,
	createStore,
	getAllStores,
	getCurrentStore,
	verifyStore,
} from "./StoreApi";
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
		stores: [],
		all_stores: [],
		temp_stores: [],
		current_page: 0,
		getAllStores: {
			loading: false,
		},
		current_store: null,
		current_store_loading: false,
	},
	reducers: {
		paginateStores: (state, { payload }) => {
			if (payload === 0) {
				state.current_page = 0;
				state.stores = state.all_stores.slice(payload, 10);
			} else {
				state.current_page = payload;
				state.stores = state.all_stores.slice(
					payload * 10,
					10 * payload + 10
				);
			}
		},
		searchStores: (state, { payload }) => {
			if (payload === "") {
				state.stores = state.all_stores.slice(0, 10);
			} else {
				state.temp_stores = state.all_stores.filter(
					(store: any) =>
						store.store_name
							.toLowerCase()
							.includes(payload.toLowerCase()) ||
						store.user_name
							.toLowerCase()
							.includes(payload.toLowerCase())
				);
				state.stores = state.temp_stores.slice(0, 10);
			}
		},
	},
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
		builder.addCase(getAllStores.pending, (state) => {
			state.getAllStores.loading = true;
		});
		builder.addCase(getAllStores.fulfilled, (state, action) => {
			state.getAllStores.loading = false;
			state.all_stores = action.payload.data;
			state.stores = action.payload.data.slice(0, 10);
		});
		builder.addCase(getAllStores.rejected, (state) => {
			state.getAllStores.loading = false;
			state.all_stores = [];
			state.stores = [];
		});
		builder.addCase(getCurrentStore.pending, (state) => {
			state.current_store_loading = true;
		});
		builder.addCase(getCurrentStore.fulfilled, (state, action) => {
			state.current_store_loading = false;
			state.current_store = action.payload.data;
		});
		builder.addCase(getCurrentStore.rejected, (state) => {
			state.current_store_loading = false;
			state.current_store = null;
		});
	},
});

export default StoreSlice.reducer;
export const { paginateStores, searchStores } = StoreSlice.actions;