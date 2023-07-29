import { createSlice } from "@reduxjs/toolkit";
import { createOrder } from "./OrderApi";

export const OrderSlice = createSlice({
	name: "Order",
	initialState: {
		create: {
			loading: false,
			success: false,
		},
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(createOrder.pending, (state) => {
			state.create.loading = true;
			state.create.success = false;
		});
		builder.addCase(createOrder.fulfilled, (state) => {
			state.create.loading = false;
			state.create.success = true;
		});
		builder.addCase(createOrder.rejected, (state) => {
			state.create.loading = false;
			state.create.success = false;
		});
	},
});

export default OrderSlice.reducer;
