import React from 'react';

import About from '../components/containers/About';

interface IProps {}

const AboutPage: React.FC<IProps> = () => {
	return <About />;
};

AboutPage.displayName = 'AboutPage';
AboutPage.defaultProps = {};

export default AboutPage;
