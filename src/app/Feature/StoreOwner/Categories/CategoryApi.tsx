import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../config/axiosInstance";
import { backendUrl } from "../../../../config/urlConfig";
import { error_toast, success_toast } from "../../../../utils/toast";

export const getCategories = createAsyncThunk(
	"getCategories",
	async (undefined, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.get(`${backendUrl}/categories`);
			return res.data;
		} catch (err: any) {
			error_toast(err);
			return rejectWithValue(err.response.data);
		}
	}
);

export const addCategory = createAsyncThunk(
	"addCategory",
	async (data: any, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.post(
				`${backendUrl}/categories`,
				data
			);
			success_toast(res);
			return res.data;
		} catch (err: any) {
			error_toast(err);
			return rejectWithValue(err.response.data);
		}
	}
);

export const updateCategory = createAsyncThunk(
	"updateCategory",
	async (data: any, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.put(
				`${backendUrl}/categories/${data.id}`,
				data
			);
			success_toast(res);
			return res.data;
		} catch (err: any) {
			error_toast(err);
			return rejectWithValue(err.response.data);
		}
	}
);

export const deleteCategory = createAsyncThunk(
	"deleteCategory",
	async (id: any, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.delete(
				`${backendUrl}/categories/${id}`
			);
			success_toast(res);
			return res.data;
		} catch (err: any) {
			error_toast(err);
			return rejectWithValue(err.response.data);
		}
	}
);
