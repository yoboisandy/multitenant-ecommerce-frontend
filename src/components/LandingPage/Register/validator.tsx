import * as yup from "yup";
export const RegisterFormValidationSchema = yup.object().shape({
	store_name: yup.string().required("Store name is a required field"),
	subdomain: yup.string().required(),
	store_category_id: yup.string().required("Category is a required field"),
	first_name: yup.string().required("First name is a required field"),
	last_name: yup.string().required("Last name is a required field"),
	phone: yup.string().required("Phone number is a required field").min(10),
	email: yup.string().required("Email is a required field").email(),
	password: yup
		.string()
		.required("Password is a required field")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%#*?&]/,
			"Must contain 8 characters, one uppercase, one lowercase, one number and one special case character"
		),
	confirm_password: yup
		.string()
		.required("Confirm password is a required field")
		.oneOf([yup.ref("password")], "Passwords must match"),
});
