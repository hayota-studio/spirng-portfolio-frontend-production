import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import { concatClasses, concatDiverseClasses } from '../../../../utils/component';

import SCategory from '../../../ui/SCategory';
import type { ICategory, IProjectsDescription, IProjectsList, IType } from '../../../../interfaces/responses';

interface IProps {
	readonly projectsRef?: React.MutableRefObject<HTMLDivElement | null>;
	readonly isMainPage: boolean;
	readonly isVisible: boolean;
	readonly categoriesList: ICategory[];
	readonly selectedCategories: ICategory[];
	readonly selectedTypes: IType[];
	readonly projectsList: IProjectsList[];
	readonly typesList: IType[];
	readonly projectsDescription: IProjectsDescription | null;
	readonly onViewPort: (_: boolean) => void;
	readonly onSelectCategory: (_: ICategory) => void;
	readonly onSelectAllCategories: () => void;
	readonly onSelectType: (_: IType) => void;
	readonly onSelectAllTypes: () => void;
	readonly onNavigateToProject: (_: string) => void;
}

import classes from './Projects.module.scss';
import SProjectCard from '../../../ui/SProjectCard';
import Intrested from '../Intrested';

const ProjectsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const headerClassesMobile = props.isVisible
		? concatDiverseClasses(
				classes['container__headerMobile'],
				classes['container__headerMobile--visible'],
				'animate__animated animate__zoomIn',
		  )
		: concatClasses(classes, 'container__headerMobile', 'container__headerMobile--hidden');

	const allCategoriesButtonClasses =
		props.selectedCategories.length === 0
			? concatClasses(classes, 'innerRow__all', 'innerRow__all--selected')
			: classes['innerRow__all'];

	return (
		<section className={classes['container']}>
			<h1 className={classes['container__header']}>Make things happen.</h1>
			<div className={classes['headerMobile']}>
				<VisibilitySensor offset={{ bottom: 50 }} onChange={props.onViewPort}>
					<h1 className={headerClassesMobile}>Make</h1>
				</VisibilitySensor>
				<h1 className={headerClassesMobile}> things </h1>

				<h1 className={headerClassesMobile}> happen.</h1>
			</div>
			{props.isMainPage ? (
				<div className={classes['projectsDescriptionBox']}>
					<h3 className={classes['projectsDescriptionBox__header']}>
						{props.projectsDescription?.attributes.header}
					</h3>
					<p className={classes['projectsDescriptionBox__description']}>
						{props.projectsDescription?.attributes.description}
					</p>
				</div>
			) : (
				<div className={classes['innerCategories']} ref={props.projectsRef}>
					<span className={classes['innerCategories__title']}>Projects:</span>
					<div className={classes['filtersList']}>
						<div className={classes['innerRow']}>
							<button
								className={allCategoriesButtonClasses}
								type="button"
								onClick={props.onSelectAllCategories}
							>
								All
							</button>
							{props.categoriesList.map((category) => (
								<SCategory
									key={category.id}
									element={category}
									selectedElements={props.selectedCategories}
									onSelectElement={props.onSelectCategory}
								/>
							))}
						</div>
					</div>
				</div>
			)}
			<div className={classes['innerProjects']}>
				<div className={classes['projectsContainer']}>
					{props.projectsList.map((project, i) => {
						const isEven = i % 2 === 0;
						const isMainPage = project.attributes.isMainPage;
						const projectId = project.id.toString();
						const projectName = project.attributes.name;
						const category = project.attributes.categories.data[0]?.attributes.name;
						const year =
							project.attributes.categories.data[0]?.attributes.createdAt.split('-')[0] ?? '';
						const media = project.attributes.media.data[0]?.attributes.url;

						if (i % 2 !== 0 || (props.isMainPage && !isMainPage)) {
							return;
						}

						return (
							<button
								key={project.id}
								type="button"
								className={classes[`${isEven ? 'leftProject' : 'rightProject'}`]}
								onClick={() => props.onNavigateToProject(projectId)}
							>
								<SProjectCard
									projectName={projectName}
									category={category}
									year={year}
									media={media}
								/>
							</button>
						);
					})}
				</div>
				<div
					className={classes['projectsContainer']}
					style={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					{props.projectsList.map((project, i) => {
						const isEven = i % 2 === 0;
						const isMainPage = project.attributes.isMainPage;
						const projectId = project.id.toString();
						const projectName = project.attributes.name;
						const category = project.attributes.categories.data[0]?.attributes.name;
						const year =
							project.attributes.categories.data[0]?.attributes.createdAt.split('-')[0] ?? '';
						const media = project.attributes.media.data[0]?.attributes.url;

						if (i % 2 === 0 || (props.isMainPage && !isMainPage)) {
							return;
						}

						return (
							<button
								key={project.id}
								type="button"
								className={classes[`${isEven ? 'leftProject' : 'rightProject'}`]}
								onClick={() => props.onNavigateToProject(projectId)}
							>
								<SProjectCard
									projectName={projectName}
									category={category}
									year={year}
									media={media}
								/>
							</button>
						);
					})}
				</div>
			</div>

			{!props.isMainPage && <Intrested typesList={props.typesList} />}
		</section>
	);
};

ProjectsView.displayName = 'ProjectsView';
ProjectsView.defaultProps = {};

export default React.memo(ProjectsView);
