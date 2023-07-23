import { useEffect, useState } from "react";
import { DashboardButton } from "../../Shared/Buttons/Buttons";
import AddProductCard from "../Products/ProductCreate/AddProductCard";
import { initialValues } from "./helper";
import { useForm } from "react-hook-form";
import { FileUploader } from "../../Shared/FileUploader/FileUploader";
import SelectField from "../../Shared/Inputs/SelectField";
import { navbar, themes } from "../../../constants/customization";
import Checkbox from "../../Shared/Inputs/Checkbox";
import { TextArea, TextField } from "../../Shared/Inputs/TextFields";
import { convert2Base64 } from "../../../utils/filehelper";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
	getCurrentStore,
	updateStoreSetting,
} from "../../../app/Feature/Store/StoreApi";
import empty from "../../../utils/empty";

const Appearance = () => {
	const [topBarChecked, setTopBarChecked] = useState(false);
	const [callToActionChecked, setCallToActionChecked] = useState(false);
	const [ad1Checked, setAd1Checked] = useState(false);
	const [ad2Checked, setAd2Checked] = useState(false);
	const [logo, setLogo] = useState<any>(null);
	const [favicon, setFavicon] = useState<any>(null);
	const [heroImage, setHeroImage] = useState<any>(null);
	const [ad1Image, setAd1Image] = useState<any>(null);
	const [ad2Image, setAd2Image] = useState<any>(null);
	const [currentLogoUrl, setCurrentLogoUrl] = useState<any>(null);
	const [currentFaviconUrl, setCurrentFaviconUrl] = useState<any>(null);
	const [currentHeroImageUrl, setCurrentHeroImageUrl] = useState<any>(null);
	const [currentAd1ImageUrl, setCurrentAd1ImageUrl] = useState<any>(null);
	const [currentAd2ImageUrl, setCurrentAd2ImageUrl] = useState<any>(null);
	const dispatch = useAppDispatch();
	const storeState: any = useAppSelector((state) => state.StoreSlice);
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		setValue,
		getValues,
		setError,
	} = useForm({
		defaultValues: initialValues,
		mode: "onChange",
	});

	const getLogo = async (files: any) => {
		const file = files[0];
		if (file) {
			const base64 = await convert2Base64(file);
			setLogo(base64);
			setCurrentLogoUrl(base64);
		} else {
			setCurrentLogoUrl("");
			setLogo(null);
		}
	};

	const getFavicon = async (files: any) => {
		const file = files[0];
		if (file) {
			const base64 = await convert2Base64(file);
			setFavicon(base64);
			setCurrentFaviconUrl(base64);
		} else {
			setCurrentFaviconUrl("");
			setFavicon(null);
		}
	};

	const getHeroImage = async (files: any) => {
		const file = files[0];
		if (file) {
			const base64 = await convert2Base64(file);
			setHeroImage(base64);
			setCurrentHeroImageUrl(base64);
		} else {
			setCurrentHeroImageUrl("");
			setHeroImage(null);
		}
	};

	const getAd1Image = async (files: any) => {
		const file = files[0];
		if (file) {
			const base64 = await convert2Base64(file);
			setAd1Image(base64);
			setCurrentAd1ImageUrl(base64);
		} else {
			setCurrentAd1ImageUrl("");
			setAd1Image(null);
		}
	};

	const getAd2Image = async (files: any) => {
		const file = files[0];
		if (file) {
			const base64 = await convert2Base64(file);
			setAd2Image(base64);
			setCurrentAd2ImageUrl(base64);
		} else {
			setCurrentAd2ImageUrl("");
			setAd2Image(null);
		}
	};

	const onTopbarChecked = (e: any) => {
		if (e.target.checked) {
			setTopBarChecked(true);
		} else {
			setTopBarChecked(false);
			setValue("topbar_text", "");
			setValue("topbar_url", "");
		}
	};

	const onCallToActionChecked = (e: any) => {
		if (e.target.checked) {
			setCallToActionChecked(true);
		} else {
			setCallToActionChecked(false);
			setValue("hero_button_text", "");
			setValue("hero_button_url", "");
		}
	};

	const onAd1Checked = (e: any) => {
		if (e.target.checked) {
			setAd1Checked(true);
		} else {
			setAd1Checked(false);
			setValue("ad1_image", "");
			setValue("ad1_url", "");
		}
	};

	const onAd2Checked = (e: any) => {
		if (e.target.checked) {
			setAd2Checked(true);
		} else {
			setAd2Checked(false);
			setValue("ad2_image", "");
			setValue("ad2_url", "");
		}
	};

	const onSubmit = async (data: any) => {
		data.favicon = favicon;
		data.logo = logo;
		data.hero_image = heroImage;
		data.ad1_image = ad1Image;
		data.ad2_image = ad2Image;
		await dispatch(updateStoreSetting({ customization: data }));
	};

	useEffect(() => {
		dispatch(getCurrentStore());
	}, [dispatch]);

	useEffect(() => {
		console.log(storeState.current_store);
		setValue("logo", storeState.current_store?.customization?.logo);
		setValue("favicon", storeState.current_store?.customization?.favicon);
		setValue("theme", storeState.current_store?.customization?.theme);
		setValue(
			"selected_navbar",
			storeState.current_store?.customization?.selected_navbar
		);
		setValue(
			"selected_hero",
			storeState.current_store?.customization?.selected_hero
		);
		setValue(
			"hero_title",
			storeState.current_store?.customization?.hero_title
		);
		setValue(
			"hero_subtitle",
			storeState.current_store?.customization?.hero_subtitle
		);
		setValue(
			"topbar_text",
			storeState.current_store?.customization?.topbar_text
		);
		setValue(
			"topbar_url",
			storeState.current_store?.customization?.topbar_url
		);
		setValue(
			"hero_button_text",
			storeState.current_store?.customization?.hero_button_text
		);
		setValue(
			"hero_button_url",
			storeState.current_store?.customization?.hero_button_url
		);
		setCurrentLogoUrl(storeState.current_store?.customization?.logo);
		setCurrentFaviconUrl(storeState.current_store?.customization?.favicon);
		setCurrentHeroImageUrl(
			storeState.current_store?.customization?.hero_image
		);
		if (storeState.current_store?.customization?.topbar_text) {
			setTopBarChecked(true);
		}
		if (storeState.current_store?.customization?.hero_button_text) {
			setCallToActionChecked(true);
		}
		if (
			storeState.current_store?.customization?.ad1_image ||
			storeState.current_store?.customization?.ad1_url
		) {
			setAd1Checked(true);
		}
		if (
			storeState.current_store?.customization?.ad2_image ||
			storeState.current_store?.customization?.ad2_url
		) {
			setAd2Checked(true);
		}
		if (!empty(storeState.current_store?.customization?.logo)) {
			setLogo(storeState.current_store?.customization?.logo);
			setCurrentLogoUrl(storeState.current_store?.customization?.logo);
		}
		if (!empty(storeState.current_store?.customization?.favicon)) {
			setFavicon(storeState.current_store?.customization?.favicon);
			setCurrentFaviconUrl(
				storeState.current_store?.customization?.favicon
			);
		}
		if (!empty(storeState.current_store?.customization?.hero_image)) {
			setHeroImage(storeState.current_store?.customization?.hero_image);
			setCurrentHeroImageUrl(
				storeState.current_store?.customization?.hero_image
			);
		}
		if (!empty(storeState.current_store?.customization?.ad1_image)) {
			setAd1Image(storeState.current_store?.customization?.ad1_image);
			setCurrentAd1ImageUrl(
				storeState.current_store?.customization?.ad1_image
			);
		}
		if (!empty(storeState.current_store?.customization?.ad2_image)) {
			setAd2Image(storeState.current_store?.customization?.ad2_image);
			setCurrentAd2ImageUrl(
				storeState.current_store?.customization?.ad2_image
			);
		}
	}, [storeState.current_store, setValue]);

	return (
		<div className="space-y-2">
			<div className="px-2 text-lg font-semibold text-gray-500">
				Customization
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex gap-4 flex-col">
					<AddProductCard>
						<div className="space-y-2">
							<div className="text-lg font-semibold text-gray-500">
								Branding
							</div>
							<div className="flex flex-wrap gap-4">
								<div className="w-[49%]">
									<FileUploader
										text="Logo"
										name="logo"
										placeholder="Click to choose a logo"
										setFile={setLogo}
										register={register}
										onChange={(e: any) =>
											getLogo(e.target.files)
										}
										currentImageUrl={currentLogoUrl}
										setCurrentImageUrl={setCurrentLogoUrl}
									/>
								</div>
								<div className="w-[49%]">
									<FileUploader
										text="Favicon"
										name="favicon"
										placeholder="Click to choose a favicon"
										setFile={setFavicon}
										register={register}
										onChange={(e: any) =>
											getFavicon(e.target.files)
										}
										currentImageUrl={currentFaviconUrl}
										setCurrentImageUrl={
											setCurrentFaviconUrl
										}
									/>
								</div>
								<div className="w-full">
									<SelectField
										text="Theme"
										focusOutline={
											"focus:outline-dashboardClr"
										}
										register={register}
										selected={getValues("theme")}
										name="theme"
										options={themes.map((theme) => ({
											value: theme,
											text: `Mecomm ${theme}`,
										}))}
									/>
								</div>
							</div>
						</div>
					</AddProductCard>
					<AddProductCard>
						<div className="space-y-2">
							<div className="text-lg font-semibold text-gray-500">
								Components
							</div>
							<div className="flex flex-wrap gap-4">
								<div className="w-full space-y-2">
									<Checkbox
										checked={topBarChecked}
										onChange={onTopbarChecked}
										text="Top Bar"
									/>
									{topBarChecked && (
										<div className="w-full flex gap-4">
											<div className="w-[49%]">
												<TextField
													focusOutline={
														"focus:outline-dashboardClr"
													}
													register={register}
													text="Top Bar Text"
													name="topbar_text"
													placeholder="eg. New Arrivals"
													type="text"
												/>
											</div>
											<div className="w-[49%]">
												<TextField
													focusOutline={
														"focus:outline-dashboardClr"
													}
													register={register}
													text="Top Bar URL"
													name="topbar_url"
													placeholder="eg. /new-arrivals"
													type="text"
												/>
											</div>
										</div>
									)}
								</div>
								<div className="w-full">
									<SelectField
										text="Navbar"
										focusOutline={
											"focus:outline-dashboardClr"
										}
										register={register}
										selected={getValues("selected_navbar")}
										name="selected_navbar"
										options={navbar.map((nav) => ({
											value: nav,
											text: nav,
										}))}
									/>
								</div>
								<div className="w-full space-y-4">
									<SelectField
										text="Hero Section"
										focusOutline={
											"focus:outline-dashboardClr"
										}
										register={register}
										selected={getValues("selected_hero")}
										name="selected_hero"
										options={navbar.map((nav) => ({
											value: nav,
											text: nav,
										}))}
									/>
									<FileUploader
										text="Hero Image"
										placeholder="Click to choose a hero image"
										name="hero_image"
										setFile={setHeroImage}
										register={register}
										onChange={(e: any) =>
											getHeroImage(e.target.files)
										}
										currentImageUrl={currentHeroImageUrl}
										setCurrentImageUrl={
											setCurrentHeroImageUrl
										}
									/>
								</div>
								<div className="w-[49%]">
									<TextArea
										text="Hero Title"
										name="hero_title"
										register={register}
										error={errors?.hero_title?.message}
										focusOutline={
											"focus:outline-dashboardClr"
										}
									/>
								</div>
								<div className="w-[49%]">
									<TextArea
										text="Hero Subtitle"
										name="hero_subtitle"
										register={register}
										error={errors?.hero_subtitle?.message}
										focusOutline={
											"focus:outline-dashboardClr"
										}
									/>
								</div>
								<div className="w-full space-y-2">
									<Checkbox
										text="Call To Action Button (on Hero Section)"
										checked={callToActionChecked}
										onChange={onCallToActionChecked}
									/>
									{callToActionChecked && (
										<div className="w-full flex gap-4">
											<div className="w-[49%]">
												<TextField
													focusOutline={
														"focus:outline-dashboardClr"
													}
													register={register}
													text="Hero Button Text"
													name="hero_button_text"
													placeholder="eg. Shop Now"
													type="text"
												/>
											</div>
											<div className="w-[49%]">
												<TextField
													focusOutline={
														"focus:outline-dashboardClr"
													}
													register={register}
													text="Hero Button URL"
													name="hero_button_url"
													placeholder="eg. /shop"
													type="text"
												/>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</AddProductCard>
					<AddProductCard>
						<div className="space-y-2">
							<div className="text-lg font-semibold text-gray-500">
								Advertise
							</div>
							<div className="flex flex-wrap gap-4">
								<div className="w-full space-y-2">
									<Checkbox
										checked={ad1Checked}
										onChange={onAd1Checked}
										text="Banner Below Shop By Category Section"
									/>
									{ad1Checked && (
										<div className="w-full flex flex-wrap gap-4">
											<div className="w-full">
												<FileUploader
													text="Ad Image"
													placeholder="Click to choose an ad image"
													name="ad1_image"
													setFile={setAd1Image}
													register={register}
													onChange={(e: any) =>
														getAd1Image(
															e.target.files
														)
													}
													currentImageUrl={
														currentAd1ImageUrl
													}
													setCurrentImageUrl={
														setCurrentAd1ImageUrl
													}
												/>
											</div>
											<div className="w-full">
												<TextField
													focusOutline={
														"focus:outline-dashboardClr"
													}
													register={register}
													text="Redirect to URL"
													name="ad1_url"
													placeholder="eg. /products/weow-widnw12-1nei83-eide9"
													type="text"
												/>
											</div>
										</div>
									)}
								</div>
								<div className="w-full space-y-2">
									<Checkbox
										checked={ad2Checked}
										onChange={onAd2Checked}
										text="Banner Below New Arrivals Section"
									/>
									{ad2Checked && (
										<div className="w-full flex flex-wrap gap-4">
											<div className="w-full">
												<FileUploader
													text="Ad Image"
													placeholder="Click to choose an ad image"
													name="ad2_image"
													setFile={setAd2Image}
													register={register}
													onChange={(e: any) =>
														getAd2Image(
															e.target.files
														)
													}
													currentImageUrl={
														currentAd2ImageUrl
													}
													setCurrentImageUrl={
														setCurrentAd2ImageUrl
													}
												/>
											</div>
											<div className="w-full">
												<TextField
													focusOutline={
														"focus:outline-dashboardClr"
													}
													register={register}
													text="Redirect to URL"
													name="ad2_url"
													placeholder="eg. /products/weow-widnw12-1nei83-eide9"
													type="text"
												/>
											</div>
										</div>
									)}
								</div>
								<div className="w-full">
									<TextField
										focusOutline={
											"focus:outline-dashboardClr"
										}
										register={register}
										text="Youtube Video Link (Above Footer Section)"
										name="youtube_video"
										placeholder="eg. https://www.youtube.com/watch?v=1nei83eide9"
										type="text"
									/>
								</div>
							</div>
						</div>
					</AddProductCard>
					<div>
						<DashboardButton
							loading={storeState.update_current_store_loading}
							className={`rounded`}
							type="submit"
						>
							Save
						</DashboardButton>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Appearance;
