import { createSlice } from "@reduxjs/toolkit";
import { getDashboardStats } from "./AnalyticsApi";

export const analyticsSlice = createSlice({
	name: "analytics",
	initialState: {
		dashboardStats: null,
		get: {
			loading: false,
		},
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getDashboardStats.pending, (state) => {
			state.get.loading = true;
			state.dashboardStats = null;
		});
		builder.addCase(getDashboardStats.fulfilled, (state, { payload }) => {
			state.get.loading = false;
			state.dashboardStats = payload.data;
		});
		builder.addCase(getDashboardStats.rejected, (state) => {
			state.get.loading = false;
			state.dashboardStats = null;
		});
	},
});

export default analyticsSlice.reducer;
