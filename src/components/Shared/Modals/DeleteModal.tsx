import { DashboardButton, MutedButton } from "../Buttons/Buttons";

const DeleteModal = (props: any) => {
	const { show, setShow, onDelete, message } = props;
	return (
		<div
			className={`${
				show ? "fixed" : "hidden"
			} min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none`}
		>
			<div className="absolute bg-black opacity-80 inset-0 z-0" />
			<div className="w-full  max-w-lg relative mx-auto my-auto rounded-xl shadow-lg bg-white ">
				{/*content*/}
				<div className="p-5 space-y-4">
					<div className="flex-auto justify-center space-y-4">
						<h2 className="text-xl font-bold">Are you sure?</h2>
						<p className="text-sm text-gray-500">
							{message ||
								"Are you sure you want to delete this? you can't undo this action."}
						</p>
					</div>
					<div className="mt-2 space-x-4 flex justify-end">
						<MutedButton onClick={() => setShow(false)}>
							Cancel
						</MutedButton>
						<DashboardButton
							onClick={onDelete}
							className={`rounded`}
						>
							Delete
						</DashboardButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeleteModal;
