export const convert2Base64 = (file: any) => {
	// if the file is a image url then we convert it to base64
	if (typeof file === "string") {
		return file;
	}

	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
};
