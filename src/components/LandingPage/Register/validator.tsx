import * as yup from "yup";
export const RegisterFormValidationSchema = yup.object().shape({
	store_name: yup.string().required(),
	subdomain: yup.string().required(),
	store_category_id: yup.string().required(),
	first_name: yup.string().required(),
	last_name: yup.string().required(),
	phone: yup.string().required().min(10),
	email: yup.string().required().email(),
	password: yup
		.string()
		.required()
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%#*?&]/,
			"Must contain 8 characters, one uppercase, one lowercase, one number and one special case character"
		),
	confirm_password: yup
		.string()
		.required()
		.oneOf([yup.ref("password")], "Passwords must match"),
});
