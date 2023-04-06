import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';

import { backendApi } from '../../../utils/http';
import type { IProjectContent } from '../../../interfaces/responses';

import ProjectView from './Project.view';

interface IProps {}

const Project: React.FC<IProps> = () => {
	const { projectId } = useParams();

	const [projectContentState, setProjectContentState] = useState<IProjectContent | null>(null);

	useEffect(() => {
		document.body.scrollTo(0, 0);

		backendApi
			.get(
				`${process.env.REACT_APP_BACKEND_URL}/api/projects/${projectId}?fields[0]=name&fields[1]=description&populate[0]=media&populate[1]=categories&fields[3]=video`,
			)
			.then((response: AxiosResponse) => {
				setProjectContentState(() => response.data.data);
			});
	}, []);

	return <ProjectView projectContent={projectContentState} />;
};

Project.displayName = 'Project';
Project.defaultProps = {};

export default React.memo(Project);
