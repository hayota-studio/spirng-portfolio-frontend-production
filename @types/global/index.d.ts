declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly REACT_APP_BACKEND_URL: string;
			readonly REACT_APP_FRONT_URL: string;
			readonly REACT_APP_NODE_ENV: 'development' | 'production';
		}
	}
}

export {};
