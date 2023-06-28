import { createSlice } from "@reduxjs/toolkit";
import { addCategory, getCategories } from "./CategoryApi";

export const CategorySlice = createSlice({
	name: "category",
	initialState: {
		categories: [],
		selected_category: null,
		loading: false,
		add: {
			loading: false,
			error: false,
		},
		update: {
			loading: false,
			error: false,
		},
		delete: {
			loading: false,
			error: false,
		},
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCategories.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(getCategories.fulfilled, (state, action) => {
			state.loading = false;
			state.categories = action.payload.data;
		});
		builder.addCase(getCategories.rejected, (state, action) => {
			state.loading = false;
			state.categories = [];
		});
		builder.addCase(addCategory.pending, (state, action) => {
			state.add.loading = true;
		});
		builder.addCase(addCategory.fulfilled, (state: any, action) => {
			state.add.loading = false;
			state.categories.unshift(action.payload.data);
		});
		builder.addCase(addCategory.rejected, (state, action) => {
			state.add.loading = false;
			state.add.error = true;
		});
	},
});

export default CategorySlice.reducer;
