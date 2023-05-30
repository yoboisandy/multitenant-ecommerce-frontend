import { PrimaryButton } from "../../Shared/Buttons/Buttons";
import SelectField from "../../Shared/Inputs/SelectField";
import logo from "../../../assets/images/logo.svg";
import { TextField, TextFieldGroup } from "../../Shared/Inputs/TextFields";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { useState, useEffect } from "react";
import Progress from "../../Shared/Progress/Progress";

const Register = () => {
	const [step, setStep] = useState(1);
	const [progress, setProgress] = useState(0);

	const nextStep = () => {
		setStep(step + 1);
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

	const handleSubmit = (e: any) => {};

	return (
		<div className="bg-gradient-btn h-[100vh] flex justify-center items-center">
			<form
				onSubmit={(e) => e.preventDefault()}
				className="bg-white p-8 w-10/12 md:7/12 lg:w-5/12 rounded-lg"
			>
				<div className="mb-8">
					{/* logo */}
					<div className="flex justify-center pb-8">
						<img
							src={logo}
							alt="Mecomm"
							className="w-[170px] h-[50px]"
						/>
					</div>
					{/* progress bar */}
					<Progress progress={progress} />
				</div>
				{/* store details */}
				{step === 1 && (
					<div className="space-y-4">
						<TextField
							text="Store Name"
							name="store_name"
							type="text"
							placeholder="eg: My Store"
							required
						/>
						{/* for subdomain */}
						<div className="md:flex items-center gap-2">
							<TextFieldGroup
								text="Sub-domain"
								name="subdomain"
								type="text"
								placeholder="eg: my-store"
								groupText=".mecomm.com"
								required
							/>
						</div>
						<SelectField
							text="Store Category"
							name="category"
							required
						/>
					</div>
				)}

				{/* personal info */}
				{step === 2 && (
					<div className="space-y-4">
						<div className="flex space-x-4">
							<TextField
								text="First Name"
								name="first_name"
								type="text"
								placeholder="eg: John"
								className="flex-1"
								required
							/>
							<TextField
								text="Last Name"
								name="last_name"
								type="text"
								placeholder="eg: Doe"
								className="flex-1"
								required
							/>
						</div>
						<TextField
							text="Phone Number"
							name="phone_number"
							type="text"
							placeholder="eg: 98XXXXXXXX"
							required
						/>
					</div>
				)}

				{/* Create an Account */}
				{step === 3 && (
					<div className="space-y-4">
						<TextField
							text="Email"
							name="email"
							type="email"
							placeholder="eg: youremail@example.com"
							required
						/>
						<TextField
							text="Password"
							name="password"
							type="password"
							required
						/>
						<TextField
							text="Confirm Password"
							name="confirm_password"
							type="password"
							required
						/>
					</div>
				)}

				<div className="flex justify-between items-center pt-8">
					{step > 1 && (
						<button
							onClick={prevStep}
							className="text-gray-500 font-semibold p-1 rounded-lg flex items-center justify-center space-x-1"
						>
							<MdOutlineArrowBackIosNew className="text-sm" />
							<span className="pr-1 pb-[1px]">Back</span>
						</button>
					)}
					{step === 1 && (
						<Link
							to={`/`}
							className="text-gray-100 font-semibold bg-slate-500 p-2 rounded-lg flex items-center space-x-1"
						>
							<ImCross className="text-xs" />
							<span className="text-sm">Cancel</span>
						</Link>
					)}

					<PrimaryButton
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
