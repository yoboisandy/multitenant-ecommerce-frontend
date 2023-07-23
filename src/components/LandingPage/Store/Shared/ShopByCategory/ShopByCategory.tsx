import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../../app/hooks";
import { StoreFrontButton } from "../../../../Shared/Buttons/Buttons";
import CategoryCard from "../CategoryCard/CategoryCard";
import MessageBox from "../MessageBox/MessageBox";

const ShopByCategory = () => {
	const categoryState = useAppSelector((state) => state.CategorySlice);
	const navigate = useNavigate();
	return (
		<div className="max-w-7xl md:mx-auto mx-2 flex flex-col gap-6">
			<div className="text-left text-gray-600 uppercase font-bold text-xl">
				Shop By Category
			</div>
			{categoryState?.all_categories.length === 0 && (
				<MessageBox
					message="Looks like you have no any categories created"
					buttonText="Add Categories"
					link="/categories"
				/>
			)}
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
				{categoryState?.all_categories.length > 0 &&
					categoryState?.all_categories?.map(
						(item: any, index) =>
							index < 8 && (
								<CategoryCard key={item.id} category={item} />
							)
					)}
			</div>
		</div>
	);
};

export default ShopByCategory;
