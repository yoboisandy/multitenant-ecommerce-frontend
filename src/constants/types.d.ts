import { Component, ReactComponentElement } from "react";
import { JsxAttribute } from "typescript";

export type ILinks = {
	name: string;
	to: string;
	icon: ReactComponentElement<any>;
};

export type INavLinks = {
	section: string;
	links: ILinks[];
};

export type IStoreData = {
	id: string;
	user_name: string;
	email: string;
	password: string;
	phone: string;
	store_name: string;
	store_category_id: string;
	subdomain: string;
	email_token: string;
	plan: string;
	email_verified_at: string;
	created_at: string;
	updated_at: string;
	store_category: {
		id: string;
		name: string;
		created_at: string;
		updated_at: string;
	};
}[];