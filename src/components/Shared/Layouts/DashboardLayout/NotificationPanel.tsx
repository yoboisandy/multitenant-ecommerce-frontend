import { AiOutlineCheckCircle } from "react-icons/ai";

const NotificationPanel = () => {
	const notifications = [
		{
			id: 1,
			message: "Your order has been placed",
			created_at: "2021-09-28",
			read: false,
		},
		{
			id: 1,
			message: "Your order has been placed order has been placed",
			created_at: "2021-09-28",
			read: false,
		},
		{
			id: 1,
			message: "Your order has been placed",
			created_at: "2021-09-28",
			read: false,
		},
		{
			id: 1,
			message: "Your order has been placed",
			created_at: "2021-09-28",
			read: false,
		},
		{
			id: 1,
			message: "Your order has been placed",
			created_at: "2021-09-28",
			read: false,
		},
		{
			id: 1,
			message: "Your order has been placed",
			created_at: "2021-09-28",
			read: false,
		},
	];
	return (
		<div className="max-h-[600px]">
			<div className="flex justify-between items-center text-lg p-4">
				<span className="font-semibold">Notifications</span>
				<button className="flex gap-1.5 items-center text-gray-500 hover:text-black">
					<AiOutlineCheckCircle size={20} />
					<span>Mark all as read</span>
				</button>
			</div>
			<hr />
			<div className="flex flex-col">
				{notifications.map((notification) => (
					<div
						key={notification.id}
						className="flex gap-2 items-center hover:bg-gray-100 p-4 cursor-pointer"
					>
						<div className="bg-gray-300 min-w-[35px] relative flex justify-center items-center h-[35px] rounded-full">
							<div className="absolute top-0 right-0 border-2 border-white rounded-full h-[12px] w-[12px] bg-gradient-btn"></div>
							<span className="font-bold text-lg">K</span>
						</div>
						<div className="flex flex-col gap-1">
							<span className="text-sm">
								{notification.message}
							</span>
							<span className="text-xs text-gray-500">
								{notification.created_at}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default NotificationPanel;
