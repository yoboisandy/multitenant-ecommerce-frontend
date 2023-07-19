import * as yup from "yup";
export const storeSettingValidation = yup.object().shape({
	store_name: yup.string().required("Store name is required"),
	store_category_id: yup.string().required("Store category is required"),
});

export const initialValues = {
	store_name: "",
	store_category_id: "",
	phone: "",
	address: "",
	store_fb: "",
	store_ig: "",
	store_tiktok: "",
	store_whatsapp: "",
	delivery_charge: "",
	delivery_time: "",
};
