import * as yup from "yup";
export const placeOrderValidationSchema = yup.object().shape({
	customer_name: yup.string().required("Customer name is required"),
	customer_email: yup.string().required("Customer email is required"),
	customer_phone: yup.string().required("Customer phone is required"),
	customer_address_province: yup.string().required("Province is required"),
	customer_address_city: yup.string().required("City is required"),
	customer_address_area: yup.string().required("Area is required"),
});

export const initialValues = {
	customer_name: "",
	customer_email: "",
	customer_phone: "",
	customer_address_province: "",
	customer_address_city: "",
	customer_address_area: "",
	customer_address_nearby_landmark: "",
	order_note: "",
	payment_method: "cod",
	products: [],
};
