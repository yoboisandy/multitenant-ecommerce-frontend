import React from "react";

const Checkbox = (props: any) => {
	const { text, name, onChange, checked } = props;
	return (
		<label className="inline-flex items-center">
			<input
				type="checkbox"
				checked={checked}
				onChange={onChange}
				className="
        form-checkbox
        rounded
        text-dashboardClr
        shadow-sm
        focus:ring-0
        focus:outline-none
        h-5
        w-5"
				name={name}
			/>
			<span className="ml-2 text-md font-md">{text}</span>
		</label>
	);
};

export default Checkbox;
