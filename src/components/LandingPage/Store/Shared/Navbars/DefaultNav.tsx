import { BsCart, BsChevronDown, BsChevronUp, BsSearch } from "react-icons/bs";
import Topbar from "../TopBar/Topbar";
import { useEffect, useState } from "react";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import SearchModal from "../SearchModal/SearchModal";

const DefaultNav = () => {
	const [showCategories, setShowCategories] = useState(false);
	const [showSearch, setShowSearch] = useState(false);
	useEffect(() => {
		const handleDocumentClick = (event: any) => {
			const categoryDropdownElement =
				document.getElementById("category-dropdown");

			if (
				!categoryDropdownElement?.contains(event.target) &&
				event.target.id !== "categories-link"
			) {
				setShowCategories(false);
			}
		};

		document.addEventListener("click", handleDocumentClick);

		return () => {
			document.removeEventListener("click", handleDocumentClick);
		};
	}, []);

	return (
		<>
			<header className="relative bg-white border-gray-200 border-b">
				<Topbar />
				<nav className="mx-auto max-w-7xl">
					<div>
						<div className="flex h-16 items-center">
							<button
								type="button"
								className="rounded-md bg-white p-2 text-gray-600 lg:hidden"
							>
								<span className="sr-only">Open menu</span>
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
							</button>
							<div className="ml-4 flex items-center lg:ml-0 text-xl font-bold">
								<a href="#">
									<span className="sr-only">
										Your Company
									</span>
									<img
										className="h-8 w-auto"
										src="https://cdn.blanxer.com/brand_logo/63faec89fb0ba7c738538c2c/647f2bce51c1df394325c3a3.png"
									/>
									{/* Maven Apparel */}
								</a>
							</div>
							<div className="hidden lg:ml-8 lg:block lg:self-stretch">
								<div className="flex h-full space-x-8">
									<a
										href="#"
										className="flex  items-center text-sm font-medium text-gray-600 hover:text-black hover:border-storeFrontClr border-b-2 border-transparent transition-colors duration-200"
									>
										Home
									</a>
									<a
										href="#"
										className="flex items-center text-sm font-medium text-gray-600 hover:text-black hover:border-storeFrontClr border-b-2 border-transparent transition-colors duration-200"
									>
										Shop
									</a>
									<div
										onClick={() =>
											setShowCategories(!showCategories)
										}
										id="categories-link"
										className="flex gap-2 items-center text-sm font-medium text-gray-600 hover:text-black hover:border-storeFrontClr border-b-2 border-transparent group cursor-pointer transition-colors duration-200"
									>
										Categories
										<span
											className={`block ${
												showCategories
													? "rotate-180"
													: "rotate-0"
											} transition-transform duration-300`}
										>
											<BsChevronDown size={12} />
										</span>
									</div>
								</div>
							</div>
							<div className="ml-auto flex items-center">
								{/* Search */}
								<div className="flex lg:ml-6">
									<button
										onClick={() => setShowSearch(true)}
										className="p-2 text-gray-600 hover:text-black"
									>
										<BsSearch size={20} />
									</button>
								</div>
								{/* Cart */}
								<div className="ml-4 flow-root lg:ml-6">
									<button className="group -m-2 flex items-center p-2 text-gray-600 hover:text-black">
										<BsCart size={20} />
									</button>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
			{showCategories && (
				<div
					id="category-dropdown"
					className="min-w-[150px] w-fit border fixed top-[90px] left-[245px] bg-white z-10"
				>
					<CategoryDropdown />
				</div>
			)}
			<SearchModal show={showSearch} setShow={setShowSearch} />
		</>
	);
};

export default DefaultNav;
