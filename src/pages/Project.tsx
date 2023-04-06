import React from 'react';

import Project from '../components/containers/Project';

interface IProps {}

const ProjectPage: React.FC<IProps> = () => {
	return <Project />;
};

ProjectPage.displayName = 'WorksPage';
ProjectPage.defaultProps = {};

export default ProjectPage;
