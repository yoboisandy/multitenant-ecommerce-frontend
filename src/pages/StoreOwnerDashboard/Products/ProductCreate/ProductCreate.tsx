import ProductCreateComp from "../../../../components/StoreOwnerDashboard/Products/ProductCreate/ProductCreate";
import DashboardLayout from "../../../../components/Shared/Layouts/DashboardLayout";
import { useParams } from "react-router-dom";

const ProductCreate = () => {
	let { productId } = useParams();
	return (
		<DashboardLayout>
			<ProductCreateComp productId={productId} />
		</DashboardLayout>
	);
};

export default ProductCreate;
