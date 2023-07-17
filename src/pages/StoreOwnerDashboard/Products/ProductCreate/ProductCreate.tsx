import ProductCreateComp from "../../../../components/StoreOwnerDashboard/Products/ProductCreate/ProductCreate";
import DashboardLayout from "../../../../components/Shared/Layouts/DashboardLayout";
import { useParams } from "react-router-dom";

const ProductCreate = () => {
	return (
		<DashboardLayout>
			<ProductCreateComp />
		</DashboardLayout>
	);
};

export default ProductCreate;
