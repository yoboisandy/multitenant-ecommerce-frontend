import { combineReducers } from "@reduxjs/toolkit";
import StoreSlice from "./Feature/Store/StoreSlice";
import AuthSlice from "./Feature/Auth/AuthSlice";
import DashboardSlice from "./Feature/Dashboard/DashboardSlice";
import CategorySlice from "./Feature/StoreOwner/Categories/CategorySlice";

const rootReducer = combineReducers({
	StoreSlice: StoreSlice,
	AuthSlice: AuthSlice,
	DashboardSlice: DashboardSlice,
	CategorySlice: CategorySlice,
});

export default rootReducer;
