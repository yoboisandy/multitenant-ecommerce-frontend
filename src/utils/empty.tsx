const empty = (value: any): boolean => {
	if (value === undefined || value === null || value === "") {
		return true;
	}
	return false;
};

export default empty;
