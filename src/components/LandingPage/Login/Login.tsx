import React from "react";
import MessageLayout from "../../Shared/Layouts/MessageLayout";
import { TextField } from "../../Shared/Inputs/TextFields";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { PrimaryButton } from "../../Shared/Buttons/Buttons";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { login } from "../../../app/Feature/Auth/AuthApi";

const Login = () => {
	const dispatch = useAppDispatch();

	const authState = useAppSelector((store) => store.AuthSlice);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onBlur",
		resolver: yupResolver(
			yup.object().shape({
				email: yup.string().email().required(),
				password: yup.string().required(),
			})
		),
	});

	const onsubmit = async (data: any) => {
		console.log(data);
		await dispatch(login(data));
	};

	return (
		<MessageLayout>
			<div className="flex flex-col gap-2">
				<h2 className="text-center text-lg font-bold text-gray-600">
					Welcome Back
				</h2>
				<span className="text-center text-md font-semibold text-gray-500">
					Login to your account
				</span>
				<form
					onSubmit={handleSubmit(onsubmit)}
					className="flex flex-col gap-6"
				>
					<TextField
						register={register}
						error={errors?.email?.message}
						text="Email"
						name="email"
						type="email"
					/>
					<TextField
						register={register}
						error={errors?.password?.message}
						text="Password"
						name="password"
						type="password"
					/>
					<Link
						to="/forgot-password"
						className="text-sm text-gray-500 font-semibold text-right"
					>
						Forgot Password?
					</Link>
					<PrimaryButton
						loading={authState.login.loading}
						type="submit"
					>
						Login
					</PrimaryButton>
				</form>
			</div>
		</MessageLayout>
	);
};

export default Login;
