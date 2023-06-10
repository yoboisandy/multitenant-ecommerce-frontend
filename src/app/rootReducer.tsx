import { combineReducers } from "@reduxjs/toolkit";
import StoreSlice from "./Feature/Store/StoreSlice";
import AuthSlice from "./Feature/Auth/AuthSlice";
import DashboardSlice from "./Feature/Dashboard/DashboardSlice";

const rootReducer = combineReducers({
	StoreSlice: StoreSlice,
	AuthSlice: AuthSlice,
	DashboardSlice: DashboardSlice,
});

export default rootReducer;
