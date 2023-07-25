import { BsCart, BsChevronDown, BsChevronUp, BsSearch } from "react-icons/bs";
import Topbar from "../TopBar/Topbar";
import { useEffect, useState } from "react";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import SearchModal from "../SearchModal/SearchModal";
import { useAppSelector } from "../../../../../app/hooks";
import { Link } from "react-router-dom";

const DefaultNav = () => {
	const [showCategories, setShowCategories] = useState(false);
	const [showSearch, setShowSearch] = useState(false);
	const storeState: any = useAppSelector((state) => state.StoreSlice);
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
			<Topbar />
			<header className=" bg-white border-gray-200 border-b sticky top-0 z-20">
				<nav className="md:mx-auto mx-2 max-w-7xl ">
					<div>
						<div className="flex py-3 items-center">
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
								<Link to="/">
									<span className="sr-only">
										Your Company
									</span>
									{storeState.current_store?.customization
										?.logo ? (
										<img
											className="h-12 w-auto"
											src={
												storeState.current_store
													?.customization?.logo ||
												"/logo.png"
											}
										/>
									) : (
										storeState.current_store?.store_name
									)}
									{/* Maven Apparel */}
								</Link>
							</div>
							<div className="hidden lg:ml-8 lg:block lg:self-stretch">
								<div className="flex items-center h-full space-x-8">
									<Link
										to="/"
										className="flex items-center text-lg font-medium text-gray-600 hover:text-storeFrontClr transition-colors duration-200"
									>
										Home
									</Link>
									<Link
										to="/shop"
										className="flex items-center text-lg font-medium text-gray-600 hover:text-storeFrontClr transition-colors duration-200"
									>
										Shop
									</Link>
									<div
										onClick={() =>
											setShowCategories(!showCategories)
										}
										id="categories-link"
										className="flex gap-2 items-center text-lg font-medium text-gray-600 hover:text-storeFrontClr group cursor-pointer transition-colors duration-200 relative"
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
										{showCategories && (
											<div
												id="category-dropdown"
												className="min-w-[150px] w-fit border absolute top-[40px] left-[0px] bg-white z-[21] text-gray-600 hover:text-gray-600"
											>
												<CategoryDropdown />
											</div>
										)}
									</div>
								</div>
							</div>
							<div className="ml-auto flex items-center">
								{/* Search */}
								<div className="flex lg:ml-6">
									<button
										onClick={() => setShowSearch(true)}
										className="p-2 text-gray-600 hover:text-storeFrontClr"
									>
										<BsSearch size={20} />
									</button>
								</div>
								{/* Cart */}
								<div className="ml-4 flow-root lg:ml-6">
									<button className="group -m-2 flex items-center p-2 text-gray-600 hover:text-storeFrontClr">
										<BsCart size={20} />
									</button>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
			<SearchModal show={showSearch} setShow={setShowSearch} />
		</>
	);
};

export default DefaultNav;
