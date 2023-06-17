import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ReactPaginate from "react-paginate";

function Pagination(props: any) {
	const { totalRows, paginate } = props;

	const pageCount = Math.ceil(totalRows / 10);

	const handlePageClick = (event: any) => {
		paginate(event.selected);
	};
	if (totalRows > 10) {
		return (
			<div className="custom__react__pagination">
				{" "}
				<ReactPaginate
					breakLabel="..."
					nextLabel={
						<span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md">
							<BsChevronRight />
						</span>
					}
					onPageChange={handlePageClick}
					pageRangeDisplayed={2}
					pageCount={pageCount}
					previousLabel={
						<span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md mr-4">
							<BsChevronLeft />
						</span>
					}
					renderOnZeroPageCount={null}
					containerClassName="flex items-center justify-center mt-8 mb-4"
					pageClassName="border-solid border-gray-200 hover:bg-gray-200 p-2 rounded-md mr-4"
					activeClassName="bg-dashboardClr text-white hover:bg-dashboardClr"
				/>
			</div>
		);
	}
	return null;
}

export default Pagination;
