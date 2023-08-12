import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../config/axiosInstance";
import { backendUrl } from "../../../config/urlConfig";
import { error_toast, success_toast } from "../../../utils/toast";

export const createOrder = createAsyncThunk(
	"createOrder",
	async (data: any, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.post(`${backendUrl}/orders`, data);
			success_toast(res.data);
			return res.data;
		} catch (err: any) {
			error_toast(err);
			return rejectWithValue(err.response.data);
		}
	}
);

export const getOrders = createAsyncThunk(
	"getOrders",
	async (undefined, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.get(`${backendUrl}/orders`);
			return res.data;
		} catch (err: any) {
			return rejectWithValue(err.response.data);
		}
	}
);