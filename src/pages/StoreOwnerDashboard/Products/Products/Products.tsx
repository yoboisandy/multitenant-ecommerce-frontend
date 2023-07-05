import React from "react";

import DashboardLayout from "../../../../components/Shared/Layouts/DashboardLayout";
import ProductsTable from "../../../../components/StoreOwnerDashboard/Products/ProductsTable/ProductsTable";

const Products = () => {
	return (
		<div>
			<DashboardLayout>
				<ProductsTable />
			</DashboardLayout>
		</div>
	);
};

export default Products;
