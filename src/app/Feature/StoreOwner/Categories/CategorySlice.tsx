import { createSlice } from "@reduxjs/toolkit";
import { addCategory, getCategories, updateCategory } from "./CategoryApi";

export const CategorySlice = createSlice({
	name: "category",
	initialState: {
		categories: [],
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
	},
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
			state.isEdit = false;
			state.selected_category = null;
		});
		builder.addCase(updateCategory.rejected, (state, action) => {
			state.update.loading = false;
			state.update.error = true;
		});
	},
});

export default CategorySlice.reducer;

export const { editUser } = CategorySlice.actions;
