import React, { useEffect, useState } from 'react';

import type { ICategory, IProjectsDescription, IProjectsList, IType } from '../../../../interfaces/responses';

import ProjectsView from './Projects.view';
import { useNavigate } from 'react-router-dom';
import { backendApi } from '../../../../utils/http';
import { AxiosResponse } from 'axios';

interface IProps {
	readonly projectsRef?: React.MutableRefObject<HTMLDivElement | null>;
	readonly projectsList: IProjectsList[];
	readonly categoriesList: ICategory[];
	readonly typesList: IType[];
	readonly isMainPage: boolean;
}

const Projects: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const nevigate = useNavigate();
	const [filteredProjectsListState, setFilteredProjectsListState] = useState<IProjectsList[]>([]);
	const [isVisibleState, setIsVisibleState] = useState<boolean>(false);
	const [selectedCategoriesState, setSelectedCategoriesState] = useState<ICategory[]>([]);
	const [selectedTypesState, setSelectedTypesState] = useState<IType[]>([]);
	const [projectsDescriptionState, setProjectsDescriptionState] = useState<IProjectsDescription | null>(
		null,
	);

	const onViewPort = (isVisible: boolean) => {
		isVisible && setIsVisibleState(() => true);
	};

	const onSelectCategory = (category: ICategory) => {
		if (selectedCategoriesState.includes(category)) {
			setSelectedCategoriesState((prev) =>
				prev.filter((prevCategory) => prevCategory.id !== category.id),
			);
		} else {
			setSelectedCategoriesState((prev) => [...prev, category]);
		}
	};

	const onSelectAllCategories = () => {
		setSelectedCategoriesState(() => []);
	};

	const onSelectType = (type: IType) => {
		if (selectedTypesState.includes(type)) {
			setSelectedTypesState((prev) => prev.filter((prevType) => prevType.id !== type.id));
		} else {
			setSelectedTypesState((prev) => [...prev, type]);
		}
	};

	const onSelectAllTypes = () => {
		setSelectedTypesState(() => []);
	};

	const onNavigateToProject = (projectId: string) => {
		nevigate(`/projects/${projectId}`);
	};

	useEffect(() => {
		if (selectedCategoriesState.length === 0 && selectedTypesState.length === 0) {
			setFilteredProjectsListState(() => props.projectsList);
			return;
		}

		//Filter by categories
		if (selectedCategoriesState.length > 0 && selectedTypesState.length === 0) {
			const filteredProjectsList = props.projectsList.filter((project) =>
				selectedCategoriesState.some((selectedCategory) =>
					project.attributes.categories.data.find(
						(category) => category.id === selectedCategory.id,
					),
				),
			);
			setFilteredProjectsListState(() => filteredProjectsList);
			return;
		}

		//Filter by types
		if (selectedCategoriesState.length === 0 && selectedTypesState.length > 0) {
			const filteredProjectsList = props.projectsList.filter((project) =>
				selectedTypesState.some((selectedType) =>
					project.attributes.types.data.find((type) => type.id === selectedType.id),
				),
			);
			setFilteredProjectsListState(() => filteredProjectsList);
			return;
		}

		//Filter by categories and types
		if (selectedCategoriesState.length > 0 && selectedTypesState.length > 0) {
			const filteredProjectsList = props.projectsList.filter((project) =>
				selectedCategoriesState.some((selectedCategory) =>
					project.attributes.categories.data.find(
						(category) => category.id === selectedCategory.id,
					),
				),
			);
			const filteredProjectsList2 = filteredProjectsList.filter((project) =>
				selectedTypesState.some((selectedType) =>
					project.attributes.types.data.find((type) => type.id === selectedType.id),
				),
			);
			setFilteredProjectsListState(() => filteredProjectsList2);
			return;
		}
	}, [selectedCategoriesState, selectedTypesState]);

	useEffect(() => {
		backendApi
			.get(`${process.env.REACT_APP_BACKEND_URL}/api/description`)
			.then((response: AxiosResponse) => {
				setProjectsDescriptionState(() => response.data.data);
			});
	}, [backendApi]);

	return (
		<ProjectsView
			isMainPage={props.isMainPage}
			projectsRef={props.projectsRef}
			isVisible={isVisibleState}
			selectedCategories={selectedCategoriesState}
			selectedTypes={selectedTypesState}
			projectsList={filteredProjectsListState}
			categoriesList={props.categoriesList}
			typesList={props.typesList}
			projectsDescription={projectsDescriptionState}
			onViewPort={onViewPort}
			onSelectCategory={onSelectCategory}
			onSelectAllCategories={onSelectAllCategories}
			onSelectType={onSelectType}
			onSelectAllTypes={onSelectAllTypes}
			onNavigateToProject={onNavigateToProject}
		/>
	);
};

Projects.displayName = 'Projects';
Projects.defaultProps = {};

export default React.memo(Projects);
