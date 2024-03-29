import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../config/axiosInstance";
import { mainBackendUrl } from "../../../config/urlConfig";
import { error_toast } from "../../../utils/toast";

export const getCategories = createAsyncThunk(
	"getCategories",
	async (undefined, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.get(
				`${mainBackendUrl}/store-categories`
			);
			return res.data;
		} catch (err: any) {
			error_toast(err);
			return rejectWithValue(err.response.data);
		}
	}
);
