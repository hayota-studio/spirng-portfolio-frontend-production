import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { backendApi } from '../../../utils/http';
import type { IProjectsList, ICategory, IType } from '../../../interfaces/responses';

import WorksView from './Works.view';

interface IProps {}

const Works: React.FC<IProps> = () => {
	const [projectsListState, setProjectsListState] = useState<IProjectsList[]>([]);
	const [categoriesListState, setCategoriesListState] = useState<ICategory[]>([]);
	const [typesListState, setTypesListState] = useState<IType[]>([]);

	useEffect(() => {
		backendApi
			.get(`${process.env.REACT_APP_BACKEND_URL}/api/categories`)
			.then((response: AxiosResponse) => {
				setCategoriesListState(() => response.data.data);
			});
	}, [backendApi]);

	useEffect(() => {
		backendApi.get(`${process.env.REACT_APP_BACKEND_URL}/api/types`).then((response: AxiosResponse) => {
			setTypesListState(() => response.data.data);
		});
	}, [backendApi]);

	useEffect(() => {
		backendApi
			.get(
				`${process.env.REACT_APP_BACKEND_URL}/api/projects?fields[0]=name&fields[1]=description&populate[0]=media&populate[1]=categories`,
			)
			.then((response: AxiosResponse) => {
				setProjectsListState(() => response.data.data);
			});
	}, [backendApi]);

	return (
		<WorksView
			projectsList={projectsListState}
			categoriesList={categoriesListState}
			typesList={typesListState}
		/>
	);
};

Works.displayName = 'Works';
Works.defaultProps = {};

export default React.memo(Works);
