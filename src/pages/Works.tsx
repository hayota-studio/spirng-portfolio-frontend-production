import React from 'react';

import Works from '../components/containers/Works';

interface IProps {}

const WorksPage: React.FC<IProps> = () => {
	return <Works />;
};

WorksPage.displayName = 'WorksPage';
WorksPage.defaultProps = {};

export default WorksPage;
