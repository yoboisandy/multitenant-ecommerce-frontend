import { createSlice } from "@reduxjs/toolkit";
import { getConfigs, getMe, login, logout } from "./AuthApi";

export const AuthSlice = createSlice({
	name: "Auth",
	initialState: {
		current_user: null as { roles: string[] } | null,
		config: null as any,
		login: {
			loading: false,
			error: false,
			success: false,
		},
		getMe: {
			loading: false,
			error: false,
			success: false,
		},
		logout: {
			loading: false,
			error: false,
			success: false,
		},
		getConfigs: {
			loading: false,
			error: false,
			success: false,
		},
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(login.pending, (state) => {
			state.login.loading = true;
			state.login.error = false;
			state.login.success = false;
		});
		builder.addCase(login.fulfilled, (state, action) => {
			localStorage.setItem("token", action.payload.data.token);
			state.login.loading = false;
			state.login.error = false;
			state.login.success = true;
			state.current_user = action.payload.data.user;
		});
		builder.addCase(login.rejected, (state) => {
			state.login.loading = false;
			state.login.error = true;
			state.login.success = false;
			state.current_user = null;
		});
		builder.addCase(getMe.pending, (state) => {
			state.getMe.loading = true;
			state.getMe.error = false;
			state.getMe.success = false;
		});
		builder.addCase(getMe.fulfilled, (state, action) => {
			state.getMe.loading = false;
			state.getMe.error = false;
			state.getMe.success = true;
			state.current_user = action.payload.data;
		});
		builder.addCase(getMe.rejected, (state) => {
			state.getMe.loading = false;
			state.getMe.error = true;
			state.getMe.success = false;
			state.current_user = null;
		});
		builder.addCase(logout.pending, (state) => {
			state.logout.loading = true;
			state.logout.error = false;
			state.logout.success = false;
		});
		builder.addCase(logout.fulfilled, (state) => {
			state.logout.loading = false;
			state.logout.error = false;
			state.logout.success = true;
			state.current_user = null;
		});
		builder.addCase(logout.rejected, (state) => {
			state.logout.loading = false;
			state.logout.error = true;
			state.logout.success = false;
			state.current_user = null;
		});
		builder.addCase(getConfigs.pending, (state) => {
			state.getConfigs.loading = true;
			state.getConfigs.error = false;
			state.getConfigs.success = false;
		});
		builder.addCase(getConfigs.fulfilled, (state, action) => {
			state.getConfigs.loading = false;
			state.getConfigs.error = false;
			state.getConfigs.success = true;
			state.config = action.payload.data;
		});
		builder.addCase(getConfigs.rejected, (state) => {
			state.getConfigs.loading = false;
			state.getConfigs.error = true;
			state.getConfigs.success = false;
			state.config = null;
		});
	},
});

export default AuthSlice.reducer;
