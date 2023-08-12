import { createSlice } from "@reduxjs/toolkit";
import { createOrder, getOrders } from "./OrderApi";

export const OrderSlice = createSlice({
	name: "Order",
	initialState: {
		allOrders: [],
		orders: [],
		create: {
			loading: false,
			success: false,
		},
		get: {
			loading: false,
			success: false,
		},
	},
	reducers: {
		filterByStatus: (state: any, action) => {
			if (action.payload === "all") state.orders = state.allOrders;
			else {
				state.orders = state.allOrders.filter(
					(order: any) => order.order_status === action.payload
				);
			}
		},
	},
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
		builder.addCase(getOrders.pending, (state) => {
			state.get.loading = true;
			state.get.success = false;
			state.allOrders = [];
			state.orders = [];
		});
		builder.addCase(getOrders.fulfilled, (state, action) => {
			state.get.loading = false;
			state.get.success = true;
			state.allOrders = action.payload.data;
		});
		builder.addCase(getOrders.rejected, (state) => {
			state.get.loading = false;
			state.get.success = false;
		});
	},
});

export default OrderSlice.reducer;
export const { filterByStatus } = OrderSlice.actions;