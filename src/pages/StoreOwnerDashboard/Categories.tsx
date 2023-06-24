import { DashboardButton } from "../../components/Shared/Buttons/Buttons";
import { SearchBox } from "../../components/Shared/Inputs/TextFields";
import DashboardLayout from "../../components/Shared/Layouts/DashboardLayout";
import {
	TBody,
	THead,
	Table,
	TableLayout,
} from "../../components/Shared/Table/Table";
const Categories = () => {
	const headingLeft = (
		<>
			<SearchBox placeholder="Search..." className="w-[200px] h-[30px]" />
			<DashboardButton className={"w-full rounded"}>
				Add Category
			</DashboardButton>
		</>
	);
	return (
		<DashboardLayout>
			<TableLayout heading="Categories" headingLeft={headingLeft}>
				<Table>
					<THead>
						<tr>
							<th>Category Name</th>
							<th>Image</th>
							<th>Actions</th>
						</tr>
					</THead>
					<TBody></TBody>
				</Table>
			</TableLayout>
		</DashboardLayout>
	);
};

export default Categories;
