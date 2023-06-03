import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../config/axiosInstance";
import { backendUrl } from "../../../config/urlConfig";
import { error_toast, success_toast } from "../../../utils/toast";

export const createStore = createAsyncThunk(
	"createStore",
	async (data: any, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.post(
				`${backendUrl}/api/stores`,
				data
			);
			success_toast(res.data);
			return res.data;
		} catch (err: any) {
			error_toast(err);
			return rejectWithValue(err.response.data);
		}
	}
);
