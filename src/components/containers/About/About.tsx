import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { backendApi } from '../../../utils/http';
import type { IAboutContent } from '../../../interfaces/responses';

import AboutView from './About.view';

interface IProps {}

const About: React.FC<IProps> = () => {
	const [aboutContentState, setAboutContentState] = useState<IAboutContent | null>(null);

	useEffect(() => {
		backendApi
			.get(`${process.env.REACT_APP_BACKEND_URL}/api/about?populate[0]=media`)
			.then((response: AxiosResponse) => {
				setAboutContentState(() => response.data.data);
			});
	}, [backendApi]);
	return <AboutView aboutContent={aboutContentState} />;
};

About.displayName = 'About';
About.defaultProps = {};

export default React.memo(About);
