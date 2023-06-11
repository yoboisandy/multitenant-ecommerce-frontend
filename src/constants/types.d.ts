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
