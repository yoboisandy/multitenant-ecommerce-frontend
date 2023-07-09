import JoditEditor from "jodit-react";
import React, { useMemo, useRef } from "react";
import "./editor.css";

const Editor = (props: any) => {
	const { text, name, error, required, content, setContent, register } =
		props;

	const editor = useRef(null);

	const config = useMemo(() => {
		return {
			uploader: {
				insertImageAsBase64URI: true,
			},
			readOnly: false,
			placeholder: "write something here.....",
			maxHeight: 400,
			zIndex: 0,
			tabIndex: 1,
			toolbarSticky: false,
		};
	}, []);

	return (
		<div className="flex flex-col gap-1.5 flex-1 relative">
			<label className="text-md font-md" htmlFor={name}>
				{text} {required && <span className="text-red-500">*</span>}
			</label>
			<div className={`${error ? "border border-red-500" : ""}`}>
				<div className={`prose prose-lg all-initial`}>
					<JoditEditor
						ref={editor}
						config={config}
						onChange={(newContent) => setContent(newContent)}
						value={""}
					/>
				</div>
			</div>
			{error && (
				<label htmlFor={name} className="text-red-500 text-sm">
					{error}
				</label>
			)}
		</div>
	);
};

export default Editor;
