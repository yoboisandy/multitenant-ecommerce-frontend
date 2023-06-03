import { combineReducers } from "@reduxjs/toolkit";
import StoreSlice from "./Feature/Store/StoreSlice";

const rootReducer = combineReducers({
	StoreSlice: StoreSlice,
});

export default rootReducer;
