import React, { useEffect, useState } from "react";

const ProductImages = ({ images, selected }: any) => {
	const [selectedImage, setSelectedImage] = useState<any>(null);

	const handleImageClick = (image: any) => {
		setSelectedImage(image);
	};

	useEffect(() => {
		if (selected) {
			const img = images.find(
				(image: any) => image.variant === selected.name
			);
			if (!img) return;
			setSelectedImage(
				images.find((image: any) => image.variant === selected.name)
			);
		} else {
			setSelectedImage(images[0]);
		}
	}, [selected]);
	console.log(selected);
	return (
		images && (
			<div className="flex flex-col">
				{/* Large Image */}
				<img
					src={selectedImage?.image}
					alt="Product"
					className="w-full md:h-[400px] h-[250px] object-cover mb-4 rounded"
				/>

				{/* Small Images */}
				<div className="flex md:gap-4 gap-2 flex-wrap">
					{images.map((image: any) => (
						<img
							key={image.id}
							src={image?.image}
							alt="Product"
							className={`md:w-24 md:h-24 w-12 h-12 object-cover border-2 rounded ${
								selectedImage?.id === image?.id
									? "border-storeFrontClr"
									: "border-gray-300"
							} cursor-pointer`}
							onClick={() => handleImageClick(image)}
						/>
					))}
				</div>
			</div>
		)
	);
};

export default ProductImages;
