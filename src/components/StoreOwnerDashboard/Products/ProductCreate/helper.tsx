import * as yup from "yup";
export const AddProductValidationSchema = yup.object().shape({
	name: yup.string().required("Product name is a required field"),
	description: yup
		.string()
		.required("Product description is a required field"),
	category_id: yup.string().required("Product category is a required field"),
	selling_price: yup
		.string()
		.required("Product selling price is a required field"),
	images: yup.array().required("Atleast one product image is required"),
	quantity: yup.number().required("Product quantity is a required field"),
});

export const initialValues = {
	id: null,
	name: "",
	description: "",
	category_id: "",
	selling_price: null,
	cost_price: null,
	crossed_price: null,
	quantity: null,
	sku: null,
	status: "active",
	options: null,
	variants: null,
	images: null,
};
