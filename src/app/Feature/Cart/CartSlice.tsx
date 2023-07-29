import { createSlice } from "@reduxjs/toolkit";
import cartItemsFromStorage from "../../../utils/getCartItems";

export const CartSlice = createSlice({
	name: "CartSlice",
	initialState: {
		open: false,
		cartItems: cartItemsFromStorage,
	},
	reducers: {
		toggleCart: (state: any) => {
			state.open = !state.open;
		},
		addToCart: (state, action) => {
			let cartItem: any = {
				product: action.payload.product,
				variant: action.payload.variant ?? null,
				quantity: action.payload.quantity ?? 1,
				image: null,
			};

			let existingCartItem: any = null;
			if (cartItem.product.variants?.length > 0) {
				cartItem.image =
					cartItem.product.product_images.find(
						(image: any) => image.variant === cartItem.variant.name
					)?.image || cartItem.product.product_images[0].image;

				existingCartItem = state.cartItems.find(
					(item: any) =>
						item.product.id === cartItem.product.id &&
						item.variant?.id === cartItem.variant?.id
				);

				if (existingCartItem) {
					existingCartItem.quantity += cartItem.quantity;
				} else {
					state.cartItems.push(cartItem);
				}
			} else {
				cartItem.image = cartItem.product.product_images[0].image;

				existingCartItem = state.cartItems.find(
					(item: any) => item.product?.id === cartItem.product?.id
				);

				if (existingCartItem) {
					existingCartItem.quantity += cartItem.quantity;
				} else {
					state.cartItems.push(cartItem);
				}
			}

			// Update cart items in local storage
			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},
		removeFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(item: any) =>
					item.product.id !== action.payload.productId ||
					item.variant?.id !== action.payload.variantId
			);

			// Update cart items in local storage
			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},
		clearCart: (state) => {
			state.cartItems = [];
			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},
	},
});

export default CartSlice.reducer;
export const { toggleCart, addToCart, removeFromCart, clearCart } =
	CartSlice.actions;
