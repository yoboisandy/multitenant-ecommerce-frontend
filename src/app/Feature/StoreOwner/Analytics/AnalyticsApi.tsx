import { createAsyncThunk } from "@reduxjs/toolkit";
import { backendUrl } from "../../../../config/urlConfig";
import axiosInstance from "../../../../config/axiosInstance";
import { error_toast } from "../../../../utils/toast";

export const getDashboardStats = createAsyncThunk(
	"getDashboardStats",
	async (undefined, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.get(
				`${backendUrl}/dashboard/analytics`
			);
			return res.data;
		} catch (err: any) {
			error_toast(err);
			return rejectWithValue(err.response.data);
		}
	}
);
