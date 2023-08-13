import { createSlice } from "@reduxjs/toolkit";
import { createOrder, getOrderById, getOrders, updateOrder } from "./OrderApi";

export const OrderSlice = createSlice({
	name: "Order",
	initialState: {
		allOrders: [],
		orders: [],
		showOrder: {},
		create: {
			loading: false,
			success: false,
		},
		get: {
			loading: false,
			success: false,
		},
		update: {
			loading: false,
			success: false,
		},
		singleOrder: {
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
		builder.addCase(updateOrder.pending, (state) => {
			state.update.loading = true;
			state.update.success = false;
		});
		builder.addCase(updateOrder.fulfilled, (state) => {
			state.update.loading = false;
			state.update.success = true;
		});
		builder.addCase(updateOrder.rejected, (state) => {
			state.update.loading = false;
			state.update.success = false;
		});
		builder.addCase(getOrderById.pending, (state) => {
			state.singleOrder.loading = true;
			state.singleOrder.success = false;
		});
		builder.addCase(getOrderById.fulfilled, (state, action) => {
			state.singleOrder.loading = false;
			state.singleOrder.success = true;
			state.showOrder = action.payload.data;
		});
		builder.addCase(getOrderById.rejected, (state) => {
			state.singleOrder.loading = false;
			state.singleOrder.success = false;
		});
	},
});

export default OrderSlice.reducer;
export const { filterByStatus } = OrderSlice.actions;