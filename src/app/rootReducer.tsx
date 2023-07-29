import { combineReducers } from "@reduxjs/toolkit";
import StoreSlice from "./Feature/Store/StoreSlice";
import AuthSlice from "./Feature/Auth/AuthSlice";
import DashboardSlice from "./Feature/Dashboard/DashboardSlice";
import CategorySlice from "./Feature/StoreOwner/Categories/CategorySlice";
import ProductSlice from "./Feature/StoreOwner/Products/ProductSlice";
import CartSlice from "./Feature/Cart/CartSlice";
import OrderSlice from "./Feature/Order/OrderSlice";

const rootReducer = combineReducers({
	StoreSlice: StoreSlice,
	AuthSlice: AuthSlice,
	DashboardSlice: DashboardSlice,
	CategorySlice: CategorySlice,
	ProductSlice: ProductSlice,
	CartSlice: CartSlice,
	OrderSlice: OrderSlice,
});

export default rootReducer;
