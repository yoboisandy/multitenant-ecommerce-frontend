import { PrimaryButton } from "../../Shared/Buttons/Buttons";
import SelectField from "../../Shared/Inputs/SelectField";
import logo from "../../../assets/images/logo.svg";
import { TextField, TextFieldGroup } from "../../Shared/Inputs/TextFields";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useState, useEffect } from "react";
import Progress from "../../Shared/Progress/Progress";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegisterFormValidationSchema } from "./validator";
import slugify from "../../../utils/slugify";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { createStore } from "../../../app/Feature/Store/StoreApi";

const Register = () => {
	const [step, setStep] = useState(1);
	const [progress, setProgress] = useState(0);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const storeState: any = useAppSelector((store) => store.StoreSlice);

	const {
		register,
		handleSubmit,
		formState: { errors },
		trigger,
		watch,
		setValue,
		reset,
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(RegisterFormValidationSchema),
	});

	const store_name = watch("store_name");
	const subdomain = watch("subdomain");

	const nextStep = async () => {
		if (step === 1) {
			await trigger(["store_name", "subdomain", "category"]).then(
				(valid) => {
					if (!valid) {
						return;
					}
					setStep(2);
				}
			);
		} else if (step === 2) {
			await trigger(["first_name", "last_name", "phone"]).then(
				(valid) => {
					if (!valid) {
						return;
					}
					setStep(3);
				}
			);
		} else if (step === 3) {
			await trigger(["email", "password", "confirm_password"]).then(
				(valid) => {
					if (!valid) {
						return;
					}
					handleSubmit(onSubmit);
				}
			);
		}
	};

	const prevStep = () => {
		setStep(step - 1);
	};

	useEffect(() => {
		if (step === 1) {
			setProgress(30);
		} else if (step === 2) {
			setProgress(60);
		} else if (step === 3) {
			setProgress(100);
		}
	}, [step]);

	useEffect(() => {
		if (store_name) {
			const subdomain = slugify(store_name);
			setValue("subdomain", subdomain);
		}
	}, [store_name, setValue]);

	useEffect(() => {
		if (subdomain) {
			const slug = slugify(subdomain);
			setValue("subdomain", slug);
		}
	}, [subdomain, setValue]);

	const onSubmit = async (data: Object) => {
		await dispatch(createStore(data)).then((res: any) => {
			if (res?.payload?.success) {
				reset();
				setStep(1);
			}
		});
	};

	return (
		<div className="bg-gradient-btn h-[100vh] flex justify-center items-center">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-white p-8 space-y-4 w-10/12 md:7/12 lg:w-5/12 rounded-lg"
			>
				<div className="space-y-4 mb-6">
					{/* logo */}
					<div className="flex justify-center">
						<img
							src={logo}
							alt="Mecomm"
							className="w-[170px] h-[50px]"
						/>
					</div>
					{/* progress bar */}
					<Progress progress={progress} />

					{/* Heading */}
					<div>
						<h2 className="text-lg font-semibold text-gray-600">
							{step === 1 &&
								"What would you like to name your store?"}
							{step === 2 && "Little more about yourself"}
							{step === 3 && "Lets create your Mecomm account"}
						</h2>
					</div>
				</div>
				{/* store details */}
				{step === 1 && (
					<div className="space-y-2">
						<TextField
							register={register}
							error={errors?.store_name?.message}
							text="Store Name"
							name="store_name"
							type="text"
							placeholder="eg: My Store"
							required
						/>
						{/* for subdomain */}
						<div className="md:flex items-center gap-2">
							<TextFieldGroup
								register={register}
								error={errors?.subdomain?.message}
								text="Sub-domain"
								name="subdomain"
								type="text"
								placeholder="eg: my-store"
								groupText=".mecomm.com"
								required
							/>
						</div>
						<SelectField
							register={register}
							error={errors?.category?.message}
							text="Store Category"
							name="store_category_id"
							defaultText="Select Category"
							options={[
								{
									value: "9950a0af-7a05-4f1a-81e7-35e306489e6c",
									text: "Category 1",
								},
								{
									value: "9950a0af-75ef-4996-b928-f28bb8c2f1fe",
									text: "Category 2",
								},
							]}
							required
						/>
					</div>
				)}

				{/* personal info */}
				{step === 2 && (
					<div className="space-y-2">
						<div className="flex space-x-4">
							<TextField
								register={register}
								error={errors?.first_name?.message}
								text="First Name"
								name="first_name"
								type="text"
								placeholder="eg: John"
								className="flex-1"
								required
							/>
							<TextField
								register={register}
								error={errors?.last_name?.message}
								text="Last Name"
								name="last_name"
								type="text"
								placeholder="eg: Doe"
								className="flex-1"
								required
							/>
						</div>
						<TextField
							register={register}
							error={errors?.phone?.message}
							text="Phone Number"
							name="phone"
							type="text"
							placeholder="eg: 98XXXXXXXX"
							required
						/>
					</div>
				)}

				{/* Create an Account */}
				{step === 3 && (
					<div className="space-y-2">
						<TextField
							register={register}
							error={errors?.email?.message}
							text="Email"
							name="email"
							type="email"
							placeholder="eg: youremail@example.com"
							required
						/>
						<TextField
							register={register}
							error={errors?.password?.message}
							text="Password"
							name="password"
							type="password"
							required
						/>
						<TextField
							register={register}
							error={errors?.confirm_password?.message}
							text="Confirm Password"
							name="confirm_password"
							type="password"
							required
						/>
					</div>
				)}

				<div className="flex justify-between items-center pt-2">
					<Link
						to={step === 1 ? "/" : ""}
						onClick={prevStep}
						className="text-gray-500 font-semibold p-1 rounded-lg flex items-center justify-center space-x-1"
					>
						<MdOutlineArrowBackIosNew className="text-sm" />
						<span className="pr-1 pb-[1px]">Back</span>
					</Link>

					<PrimaryButton
						type={step === 3 ? "button" : "div"}
						loading={storeState.loading}
						onClick={step === 3 ? handleSubmit : nextStep}
						className={`rounded-lg float-right`}
					>
						{step === 3 ? "Register" : "Next"}
					</PrimaryButton>
				</div>
			</form>
		</div>
	);
};

export default Register;
