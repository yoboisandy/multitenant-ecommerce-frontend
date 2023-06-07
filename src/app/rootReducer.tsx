import { combineReducers } from "@reduxjs/toolkit";
import StoreSlice from "./Feature/Store/StoreSlice";
import AuthSlice from "./Feature/Auth/AuthSlice";

const rootReducer = combineReducers({
	StoreSlice: StoreSlice,
	AuthSlice: AuthSlice,
});

export default rootReducer;
