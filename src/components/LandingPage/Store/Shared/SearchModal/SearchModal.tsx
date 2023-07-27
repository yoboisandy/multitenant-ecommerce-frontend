import React from "react";
import { SearchBox } from "../../../../Shared/Inputs/TextFields";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { searchProducts } from "../../../../../app/Feature/StoreOwner/Products/ProductSlice";
import { useAppDispatch } from "../../../../../app/hooks";
const SearchModal = ({ show, setShow }: any) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const search = (e: any) => {
		if (e.key === "Enter") {
			navigate(`/search?q=${e.target.value}`);
			dispatch(searchProducts(e.target.value));
			setShow(false);
			// clear search input
			e.target.value = "";
		}
	};
	return (
		show && (
			<div
				className={
					show
						? "fixed inset-0 z-[100] h-screen bg-black bg-opacity-20"
						: ""
				}
			>
				<div
					className={`fixed ${
						show ? "top-0" : "top-[-300px]"
					} right-0 left-0 px-12 py-9 bg-white border-b transition-all duration-300 z-50`}
				>
					<div className="flex gap-2 items-end max-w-2xl mx-auto">
						<SearchBox
							focused={true}
							text="Search"
							focusOutline={`focus:outline-storeFrontClr`}
							placeholder="Search Text"
							onKeyDown={search}
						/>
						<button
							onClick={() => setShow(false)}
							className="text-gray-400 mb-1"
						>
							<RxCross2 size={25} />
						</button>
					</div>
				</div>
			</div>
		)
	);
};

export default SearchModal;
