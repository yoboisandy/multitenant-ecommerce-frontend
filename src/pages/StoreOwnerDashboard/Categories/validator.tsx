import * as yup from "yup";
export const AddCategoryValidationSchema = yup.object().shape({
	name: yup.string().required("Category name is a required field"),
});
