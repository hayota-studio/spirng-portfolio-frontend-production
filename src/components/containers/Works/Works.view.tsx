import React from 'react';
import SPageHeader from '../../ui/SPageHeader';

import { IProjectsList, ICategory, IType } from '../../../interfaces/responses';

import Projects from '../Main/Projects';

import classes from './Works.module.scss';

interface IProps {
	readonly projectsList: IProjectsList[];
	readonly categoriesList: ICategory[];
	readonly typesList: IType[];
}

const WorksView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<section className={classes['container']}>
			<SPageHeader navigateTo="/menu" theme="light" />

			{props.projectsList.length > 0 && (
				<Projects
					isMainPage={false}
					projectsList={props.projectsList}
					categoriesList={props.categoriesList}
					typesList={props.typesList}
				/>
			)}
		</section>
	);
};

WorksView.displayName = 'WorksView';
WorksView.defaultProps = {};

export default React.memo(WorksView);
