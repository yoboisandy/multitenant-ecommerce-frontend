import { createSlice } from "@reduxjs/toolkit";
import { createStore } from "./StoreApi";

export const StoreSlice = createSlice({
	name: "Store",
	initialState: {
		loading: false,
		req_success: false,
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
	},
});

export default StoreSlice.reducer;
