import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { toggleSidebar } from "../../../../app/Feature/Dashboard/DashboardSlice";
import { BsFillPersonFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { IoNotificationsSharp } from "react-icons/io5";

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../app/Feature/Auth/AuthApi";
import { PrimaryButton } from "../../Buttons/Buttons";
import NotificationPanel from "./NotificationPanel";

const Navbar = () => {
	const [openUserDropdown, setOpenUserDropdown] = useState(false);
	const [openNotificationPanel, setOpenNotificationPanel] = useState(false);
	const dispatch = useAppDispatch();
	const authState: any = useAppSelector((state) => state.AuthSlice);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	const logoutUser = async () => {
		await dispatch(logout()).then(() => {
			navigate("/login");
		});
	};

	useEffect(() => {
		if (openUserDropdown) {
			setOpenNotificationPanel(false);
		}

		if (openNotificationPanel) {
			setOpenUserDropdown(false);
		}
	}, [
		openUserDropdown,
		setOpenNotificationPanel,
		openNotificationPanel,
		setOpenUserDropdown,
	]);

	useEffect(() => {
		const handleOutsideClick = (event: any) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target)
			) {
				setOpenUserDropdown(false);
				setOpenNotificationPanel(false);
			}
		};

		document.addEventListener("click", handleOutsideClick);

		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, []);

	return (
		<nav className="px-4 shadow-sm h-[70px] w-full flex items-center justify-between z-10">
			<button className="font-semibold text-lg">
				<HiOutlineBars3CenterLeft
					size={40}
					onClick={() => dispatch(toggleSidebar())}
				/>
			</button>
			<div className="flex items-center gap-4" ref={dropdownRef}>
				<button
					onClick={() =>
						setOpenNotificationPanel(!openNotificationPanel)
					}
					className="relative"
				>
					<IoNotificationsSharp height={24} width={24} size={30} />
					<div className="rounded-full h-[15px] bg-gradient-btn p-0.5 absolute -top-1 right-0 text-[7px] font-semibold text-white flex items-center justify-center">
						99+
					</div>
				</button>
				<button onClick={() => setOpenUserDropdown(!openUserDropdown)}>
					{authState.current_user?.avatar_url ? (
						<img
							src={authState.current_user?.avatar_url}
							alt="avatar"
							className="rounded-full h-[50px] w-[50px]"
						/>
					) : (
						<div className="rounded-full grid place-items-center h-[40px] w-[40px] bg-gray-300">
							<BsFillPersonFill
								size={20}
								className="text-gray-500"
							/>
						</div>
					)}
				</button>
				{openUserDropdown && (
					<div className="absolute top-[70px] right-2 bg-white shadow-lg p-4 space-y-4">
						<div className="">
							<button
								onClick={() => navigate("/admin/profile")}
								className="flex items-center text-lg text-gray-500 hover:text-gray-700"
							>
								<BsFillPersonFill className="inline-block mr-2" />
								<span>Profile</span>
							</button>
						</div>
						<div className="">
							<PrimaryButton
								className="rounded-lg"
								loading={authState.logout.loading}
								onClick={logoutUser}
							>
								<FiLogOut
									size={20}
									className="inline-block mr-2"
								/>
								<span>Logout</span>
							</PrimaryButton>
						</div>
					</div>
				)}
				{openNotificationPanel && (
					<div className="absolute min-w-[30%] top-[75px] right-2 bg-white shadow-lg space-y-4 z-50">
						<NotificationPanel />
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
