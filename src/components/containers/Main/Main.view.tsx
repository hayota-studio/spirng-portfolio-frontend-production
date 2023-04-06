import React from 'react';
import { motion } from 'framer-motion';

import { IProjectsList, ICategory, IType } from '../../../interfaces/responses';
import classes from './Main.module.scss';

import Intro from './Intro';
import Projects from './Projects';
import Footer from '../../layout/Footer';

interface IProps {
	readonly projectsRef: React.MutableRefObject<HTMLDivElement | null>;
	readonly projectsList: IProjectsList[];
	readonly categoriesList: ICategory[];
	readonly typesList: IType[];
}

const MainView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const transition = {
		duration: 0.5,
		ease: 'easeInOut',
		type: 'tween',
	};

	return (
		<motion.section
			className={classes['container']}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={transition}
		>
			<Intro projectsList={props.projectsList} />
			{props.projectsList.length > 0 && (
				<Projects
					isMainPage
					projectsRef={props.projectsRef}
					projectsList={props.projectsList}
					categoriesList={props.categoriesList}
					typesList={props.typesList}
				/>
			)}
			<Footer />
		</motion.section>
	);
};

MainView.displayName = 'MainView';
MainView.defaultProps = {};

export default React.memo(MainView);
