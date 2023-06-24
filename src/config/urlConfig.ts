export const mainBackendUrl = "http://localhost/api";
const AUTH_URLs: any = () => {
	const user = {
		isNormal: false,
		isTenant: false,
		tenant: "",
	};
	const host: any = window.location.hostname;
	const checkhost = host.split(".");
	if (checkhost[0] === "localhost" || checkhost[0] === "academy") {
		user.isNormal = true;
	} else {
		user.isTenant = true;
		const host = checkhost[0];
		user.tenant = host;
	}
	let url;
	if (user.isNormal) {
		url = "http://localhost/api";
	} else {
		url = `http://localhost/api/${user.tenant}`;
	}
	return { url, user };
};

export const backendUrl = AUTH_URLs().url;
export const currentDomain = AUTH_URLs().user;
