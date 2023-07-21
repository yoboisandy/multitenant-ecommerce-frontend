import CategoryCard from "../CategoryCard/CategoryCard";

const ShopByCategory = () => {
	return (
		<div className="max-w-7xl md:mx-auto mx-2 flex flex-col gap-6">
			<div className="text-left text-gray-600 uppercase font-bold text-xl">
				Shop By Category
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
				{[1, 2, 3, 4].map((item, index) => (
					<CategoryCard key={index} />
				))}
			</div>
		</div>
	);
};

export default ShopByCategory;
