import * as yup from "yup";
export const RegisterFormValidationSchema = yup.object().shape({
	store_name: yup.string().required(),
	subdomain: yup.string().required(),
	category: yup.string().required(),
	first_name: yup.string().required(),
	last_name: yup.string().required(),
	phone_number: yup.string().required().min(10),
	email: yup.string().required().email(),
	// passwrod should be at least 8 characters long and should contain at least one uppercase letter, one lowercase letter, one number and one special character.
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
