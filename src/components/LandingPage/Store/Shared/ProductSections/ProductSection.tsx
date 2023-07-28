import MessageBox from "../MessageBox/MessageBox";
import ProductCard from "../ProductCard/ProductCard";

const ProductSection = ({ title, products }: any) => {
	return (
		<div className="max-w-7xl md:mx-auto mx-2 flex flex-col gap-6">
			{title && (
				<>
					<div className="text-left text-gray-600 uppercase font-bold text-xl">
						{title}
					</div>
					{title.toLowerCase() === "new arrivals" &&
						products?.length === 0 && (
							<MessageBox
								message="Looks like you have no any products created"
								buttonText="Add Products"
								link="/products/add"
							/>
						)}
				</>
			)}
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{products?.length > 0 &&
					products.map((item: any, index: number) => (
						<ProductCard key={index} product={item} />
					))}
			</div>
		</div>
	);
};

export default ProductSection;
