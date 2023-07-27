const cartItemsFromStorage: any = localStorage.getItem("cartItems")
	? JSON.parse(localStorage?.getItem("cartItems") ?? "[]")
	: [];

export default cartItemsFromStorage;
