import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../config/axiosInstance";
import { backendUrl } from "../../../config/urlConfig";
import { error_toast, success_toast } from "../../../utils/toast";

export const createStore = createAsyncThunk(
	"createStore",
	async (data: any, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.post(`${backendUrl}/stores`, data);
			success_toast(res.data);
			return res.data;
		} catch (err: any) {
			error_toast(err);
			return rejectWithValue(err.response.data);
		}
	}
);

export const verifyStore = createAsyncThunk(
	"verifyStore",
	async (data: any, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.get(
				`${backendUrl}/stores/${data.store_id}/verify/${data.token}`
			);
			success_toast(res.data);
			return res.data;
		} catch (err: any) {
			error_toast(err);
			return rejectWithValue(err.response.data);
		}
	}
);

export const checkStoreReady = createAsyncThunk(
	"checkStoreReady",
	async (data: any, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.get(
				`${backendUrl}/stores/${data.store_id}/check-ready`
			);
			return res.data;
		} catch (err: any) {
			error_toast(err);
			return rejectWithValue(err.response.data);
		}
	}
);

export const getAllStores = createAsyncThunk(
	"getAllStores",
	async (undefined, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.get(`${backendUrl}/get-stores`);
			return res.data;
		} catch (err: any) {
			error_toast(err);
			return rejectWithValue(err.response.data);
		}
	}
);

export const getCurrentStore = createAsyncThunk(
	"getCurrentStore",
	async (undefined, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.get(
				`${backendUrl}/get-current-store`
			);
			return res.data;
		} catch (err: any) {
			error_toast(err);
			return rejectWithValue(err.response.data);
		}
	}
);

export const updateStorePlan = createAsyncThunk(
	"updateStorePlan",
	async (data: any, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.put(
				`${backendUrl}/stores/${data.store_id}/update-plan`,
				{ plan: data.plan }
			);
			success_toast(res.data);
			return res.data;
		} catch (err: any) {
			error_toast(err);
			return rejectWithValue(err.response.data);
		}
	}
);

export const updateStoreSetting = createAsyncThunk(
	"updateStoreSetting",
	async (data: any, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.put(`${backendUrl}/stores`, data);
			success_toast(res.data);
			return res.data;
		} catch (err: any) {
			error_toast(err);
			return rejectWithValue(err.response.data);
		}
	}
);