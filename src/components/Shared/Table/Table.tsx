import { FiTrash2 } from "react-icons/fi";
import { MdOutlineModeEditOutline } from "react-icons/md";

export const TableLayout = ({
	children,
	heading,
	headingLeft,
	belowHeading,
}: any) => {
	return (
		<div className="flex flex-col border-2 bg-gray-50">
			<div className="inline-block">
				<div className="flex justify-between px-2 py-3">
					<div className="space-y-2">
						<div className="text-lg font-semibold text-gray-500">
							{heading}
						</div>
						{belowHeading && <div>{belowHeading}</div>}
					</div>
					<div className="flex gap-2 items-end">
						{headingLeft ?? headingLeft}
					</div>
				</div>
				<div className="overflow-x-auto min-w-full">{children}</div>
			</div>
		</div>
	);
};

export const Table = ({ children }: any) => (
	<table className="min-w-full">{children}</table>
);

export const THead = ({ children }: any) => {
	return <thead className="border-b text-white">{children}</thead>;
};

export const TBody = ({ children }: any) => {
	return <tbody className="divide-y-2 divide-gray-100">{children}</tbody>;
};

export const TableActions = (props: any) => {
	const { onEdit, onDelete } = props;

	return (
		<td className="flex gap-2" onClick={(e) => e.stopPropagation()}>
			{onEdit && (
				<MdOutlineModeEditOutline
					className="cursor-pointer text-gray-500 hover:text-blue-600"
					size={28}
					onClick={onEdit}
				/>
			)}
			{onDelete && (
				<FiTrash2
					className="cursor-pointer text-gray-500 hover:text-red-600"
					size={25}
					onClick={onDelete}
				/>
			)}
		</td>
	);
};
