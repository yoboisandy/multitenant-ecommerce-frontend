export const mainBackendUrl = process.env.REACT_APP_MAIN_BACKEND_URL;
const AUTH_URLs: any = () => {
	const user = {
		isNormal: false,
		isTenant: false,
		tenant: "",
	};
	const host: any = window.location.hostname;
	const checkhost = host.split(".");
	// get the main domain
	let mainDomainName;
	if (process.env.NODE_ENV === "development") {
		mainDomainName = "localhost";
	} else {
		mainDomainName = checkhost[checkhost.length - 2];
	}

	if (checkhost[0] === mainDomainName) {
		user.isNormal = true;
	} else {
		user.isTenant = true;
		const host = checkhost[0];
		user.tenant = host;
	}
	let url;
	if (user.isNormal) {
		url = mainBackendUrl
	} else {
		url = `${mainBackendUrl ?? "http://localhost:8000/api"}/${
			user.tenant
		}`;
	}
	return { url, user };
};

export const backendUrl = AUTH_URLs().url;
export const currentDomain = AUTH_URLs().user;
