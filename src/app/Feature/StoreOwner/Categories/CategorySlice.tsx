import { createSlice } from "@reduxjs/toolkit";
import {
	addCategory,
	deleteCategory,
	getCategories,
	updateCategory,
} from "./CategoryApi";
import { getConfigs } from "../../Auth/AuthApi";

export const CategorySlice = createSlice({
	name: "category",
	initialState: {
		categories: [],
		all_categories: [],
		isEdit: false,
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
	reducers: {
		editUser: (state, action) => {
			state.isEdit = true;
			state.selected_category = action.payload;
		},
		searchCategories: (state, action) => {
			if (action.payload === "") {
				state.categories = state.all_categories;
			} else {
				state.categories = state.all_categories.filter(
					(category: any) =>
						category.name
							.toLowerCase()
							.includes(action.payload.toLowerCase())
				);
			}
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getCategories.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(getCategories.fulfilled, (state, action) => {
			state.loading = false;
			state.categories = action.payload.data;
			state.all_categories = action.payload.data;
		});
		builder.addCase(getCategories.rejected, (state, action) => {
			state.loading = false;
			state.categories = [];
			state.all_categories = [];
		});
		builder.addCase(addCategory.pending, (state, action) => {
			state.add.loading = true;
		});
		builder.addCase(addCategory.fulfilled, (state: any, action) => {
			state.add.loading = false;
			state.categories.unshift(action.payload.data);
			state.all_categories.unshift(action.payload.data);
		});
		builder.addCase(addCategory.rejected, (state, action) => {
			state.add.loading = false;
			state.add.error = true;
		});
		builder.addCase(updateCategory.pending, (state, action) => {
			state.update.loading = true;
		});
		builder.addCase(updateCategory.fulfilled, (state: any, action) => {
			state.update.loading = false;
			state.categories = state.categories.map((category: any) =>
				category.id === action.payload.data.id
					? action.payload.data
					: category
			);
			state.all_categories = state.categories;
			state.isEdit = false;
			state.selected_category = null;
		});
		builder.addCase(updateCategory.rejected, (state, action) => {
			state.update.loading = false;
			state.update.error = true;
		});
		builder.addCase(deleteCategory.pending, (state, action) => {
			state.delete.loading = true;
		});
		builder.addCase(deleteCategory.fulfilled, (state: any, action) => {
			state.delete.loading = false;
			state.categories = state.categories.filter(
				(category: any) => category.id !== action.payload.data.id
			);
			state.all_categories = state.categories;
		});
		builder.addCase(deleteCategory.rejected, (state, action) => {
			state.delete.loading = false;
			state.delete.error = true;
		});
		builder.addCase(getConfigs.fulfilled, (state, action) => {
			state.categories = action.payload.data.categories;
			state.all_categories = action.payload.data.categories;
		});
	},
});

export default CategorySlice.reducer;

export const { editUser, searchCategories } = CategorySlice.actions;
