import { createSlice } from "@reduxjs/toolkit";
import { getMe, login } from "./AuthApi";

export const AuthSlice = createSlice({
	name: "Auth",
	initialState: {
		current_user: {},
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
			state.current_user = {};
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
			state.current_user = {};
		});
	},
});

export default AuthSlice.reducer;
