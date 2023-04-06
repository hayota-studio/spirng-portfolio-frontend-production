export interface IProjectsList {
	readonly id: number;
	readonly attributes: {
		readonly name: string;
		readonly description: string;
		readonly isMainPage: boolean;
		readonly media: {
			readonly data: {
				readonly id: number;
				readonly attributes: {
					readonly name: string;
					readonly alternativeText: string;
					readonly caption: string;
					readonly url: string;
					readonly height: string;
					readonly width: string;
				};
			}[];
		};
		readonly categories: {
			readonly data: ICategory[];
		};
		readonly types: {
			readonly data: IType[];
		};
	};
}

export interface IVideosList {
	readonly id: number;
	readonly attributes: {
		readonly videos: {
			readonly web: string[];
			readonly mobile: string[];
		};
	};
}

export interface ICategory {
	readonly id: number;
	readonly attributes: {
		readonly name: string;
		readonly description: string;
		readonly createdAt: string;
	};
}

export interface IType {
	readonly id: number;
	readonly attributes: {
		readonly name: string;
		readonly description: string;
		readonly createdAt: string;
	};
}

export interface IAboutContent {
	readonly id: number;
	readonly attributes: {
		readonly header: string;
		readonly description: string;
		readonly media: {
			readonly data: {
				readonly attributes: {
					readonly url: string;
				};
			};
		};
	};
}

export interface IContactContent {
	readonly id: number;
	readonly attributes: {
		readonly email: string;
		readonly city: string;
		readonly fullAdress: string;
		readonly clients: { clients: string[] };
	};
}

export interface IProjectContent {
	readonly id: number;
	readonly attributes: {
		readonly name: string;
		readonly description: string;
		readonly video: string;
		readonly categories: {
			readonly data: {
				readonly id: number;
				readonly attributes: {
					readonly name: string;
					readonly createdAt: string;
				};
			}[];
		};
		readonly types: any;
		readonly media: {
			readonly data: {
				readonly id: number;
				readonly attributes: {
					readonly name: string;
					readonly caption: string;
					readonly url: string;
				};
			}[];
		};
	};
}

export interface IProjectsDescription {
	readonly id: number;
	readonly attributes: {
		readonly header: string;
		readonly description: string;
	};
}

export interface CustomIframeProps
	extends React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> {
	autoplay?: boolean;
	loop?: boolean;
}
