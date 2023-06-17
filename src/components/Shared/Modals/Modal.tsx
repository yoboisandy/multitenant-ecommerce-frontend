import React from "react";

const Modal = ({ children }: any) => {
	return (
		<div
			className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none"
			id="modal-id"
		>
			<div className="absolute bg-black opacity-80 inset-0 z-0" />
			<div className="w-full  max-w-lg relative mx-auto my-auto rounded-xl shadow-lg bg-white ">
				{/*content*/}
				<div className="p-5 space-y-4">{children}</div>
			</div>
		</div>
	);
};

export const ModalHeader = ({ children, ...props }: any) => {
	return (
		<h2 className={`text-xl font-bold ${props.className}`}>{children}</h2>
	);
};

export const ModalBody = ({ children, ...props }: any) => {
	return <div className={`space-y-4 ${props.className}`}>{children}</div>;
};

export const ModalFooter = ({ children, ...props }: any) => {
	return <div className={`mt-2 ${props.className}`}>{children}</div>;
};

export default Modal;
