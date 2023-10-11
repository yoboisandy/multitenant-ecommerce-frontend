import React from "react";
import { DashboardButton } from "../../Shared/Buttons/Buttons";
import { useNavigate } from "react-router-dom";

const SubscriptionsComp = () => {
	const subscriptions: any = [
		{
			id: 1,
			name: "Starter",
			price: "Free",
			plan: null,
			features: [
				"Basic Analytics",
				"Order Management",
				"Basic Website Customization",
				"Default Website Theme",
				"Upto 15 products",
			],
			url: null,
		},
		{
			id: 2,
			name: "Premium",
			price: "Rs. 999",
			plan: "Monthly",
			features: [
				"Unlimited products",
				"5 Staff Store",
				"Custom Domain Integration",
				"Website Customization",
				"SMS Plugin",
				"Online Payment Integration",
				"Website SEO",
				"Customers Data Management",
				"Bulk Upload & Media Manager",
				"All available Plugin Integrations",
				"Custom Favicon Icon",
				"Customer Support",
			],
			url: "https://buy.stripe.com/test_bIY3et3iv6gvfJu4gh",
		},
		{
			id: 3,
			name: "Premium Plus",
			price: "Rs. 9,999",
			plan: "Annually",
			features: [
				"Unlimited products",
				"5 Staff Store",
				"Custom Domain Integration",
				"Website Customization",
				"SMS Plugin",
				"Online Payment Integration",
				"Website SEO",
				"Customers Data Management",
				"Bulk Upload & Media Manager",
				"All available Plugin Integrations",
				"Custom Favicon Icon",
				"Customer Support",
			],
			url: "https://buy.stripe.com/test_14k02hf1d6gv40M9AC",
		},
	];
	const navigate = useNavigate();
	const redirectToPayment = (url: string) => {
		if (url !== null) {
			window.open(url, "_blank");
		} else {
			navigate("/dashboard");
		}
	};
	return (
		<div className="space-y-10">
			<div className="w-2/3 mx-auto">
				<h1 className="font-bold text-4xl text-center">
					Premium plan for your business starting as low as{" "}
					<span className="text-dashboardClr">NPR 27/day</span>.
				</h1>
			</div>
			<div className="w-full px-12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto text-center">
				{subscriptions.map((subscription: any) => {
					return (
						<div
							key={subscription.name}
							className="shadow p-5 rounded-lg border-t-4 border-dashboardClr bg-white"
						>
							<p className="uppercase text-sm font-medium text-gray-500">
								{subscription.name}
							</p>
							<p className="mt-4 text-3xl text-gray-700 font-medium">
								{subscription.price}{" "}
								<span className="text-base font-normal">
									{subscription.plan}
								</span>
							</p>
							<div className="mt-6">
								<DashboardButton
									onClick={() =>
										redirectToPayment(subscription.url)
									}
									className="rounded-full mx-auto"
								>
									Subscribe
								</DashboardButton>
							</div>
							<div className="mt-8">
								<ul className="grid grid-cols-1 gap-4">
									{subscription.features.map(
										(feature: any) => {
											return (
												<li
													key={feature}
													className="inline-flex items-center text-gray-600"
												>
													<svg
														className="w-4 h-4 mr-2 fill-current text-dashboardClr"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512"
													>
														<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z" />
													</svg>
													{feature}
												</li>
											);
										}
									)}
								</ul>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SubscriptionsComp;
