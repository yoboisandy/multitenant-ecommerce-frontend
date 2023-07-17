import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../config/axiosInstance";
import { backendUrl } from "../../../../config/urlConfig";
import { error_toast, success_toast } from "../../../../utils/toast";

export const addProduct = createAsyncThunk(
	"addProduct",
	async (data: any, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.post(
				`${backendUrl}/products`,
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

export const getProducts = createAsyncThunk(
	"getProducts",
	async (data: any, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.get(
				`${backendUrl}/products?status=${data.status}`
			);
			return res.data;
		} catch (err: any) {
			error_toast(err);
			return rejectWithValue(err.response.data);
		}
	}
);

export const getProductById = createAsyncThunk(
	"getProductById",
	async (data: any, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.get(
				`${backendUrl}/products/${data.productId}`
			);
			return res.data;
		} catch (err: any) {
			error_toast(err);
			return rejectWithValue(err.response.data);
		}
	}
);

export const deleteProduct = createAsyncThunk(
	"deleteProduct",
	async (data: any, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.delete(
				`${backendUrl}/products/${data.id}`
			);
			success_toast(res.data);
			return res.data;
		} catch (err: any) {
			error_toast(err);
			return rejectWithValue(err.response.data);
		}
	}
);