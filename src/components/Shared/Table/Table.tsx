import { FiEdit2, FiTrash2 } from "react-icons/fi";

export const TableLayout = ({ children, heading, headingLeft }: any) => {
	return (
		<div className="flex flex-col border-2 ">
			<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="inline-block min-w-full sm:px-6 lg:px-8">
					<div className="overflow-hidden">
						<div className="flex justify-between items-center px-6 py-4">
							<div className="text-xl font-semibold text-gray-500">
								{heading}
							</div>
							<div>{headingLeft ? headingLeft : ""}</div>
						</div>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export const Table = ({ children }: any) => (
	<table className="min-w-full">{children}</table>
);

export const THead = ({ children }: any) => {
	return (
		<thead className="border-b text-white bg-blue-600">{children}</thead>
	);
};

export const TBody = ({ children }: any) => {
	return <tbody className="divide-y-2 divide-gray-100">{children}</tbody>;
};

export const TableActions = (props: any) => {
	const { onEdit, onDelete, padding, mt2 } = props;

	return (
		<td className={`flex justify-left gap-4`}>
			<FiEdit2
				className="cursor-pointer text-gray-500 hover:text-blue-600"
				size={25}
				onClick={onEdit}
			/>
			<FiTrash2
				className="cursor-pointer text-gray-500 hover:text-red-600"
				size={25}
				onClick={onDelete}
			/>
		</td>
	);
};
