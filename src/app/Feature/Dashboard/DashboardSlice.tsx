import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
	name: "dashboard",
	initialState: {
		sidebarOpen: true,
	},
	reducers: {
		toggleSidebar: (state) => {
			state.sidebarOpen = !state.sidebarOpen;
		},
	},
});

export const { toggleSidebar } = dashboardSlice.actions;
export default dashboardSlice.reducer;
