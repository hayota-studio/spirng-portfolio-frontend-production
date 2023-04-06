import React, { useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Preload from './hooks/Preload';

interface IProps {}

const Main = React.lazy(() => import('./pages/Main'));
const Menu = React.lazy(() => import('./pages/Menu'));
const Works = React.lazy(() => import('./pages/Works'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Project = React.lazy(() => import('./pages/Project'));

const AppRouter: React.FC<IProps> = () => {
	const location = useLocation();
	const projectsRef = useRef<HTMLDivElement | null>(null);

	return (
		<AnimatePresence initial={false}>
			<Preload component={About} />
			<Preload component={Menu} />
			<Preload component={Works} />
			<Preload component={Contact} />
			<Preload component={Project} />
			<Routes location={location} key={location.pathname}>
				<Route path="" element={<Main projectsRef={projectsRef} />} />
				<Route path="/menu" element={<Menu projectsRef={projectsRef} />} />
				<Route path="/works" element={<Works />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/projects/:projectId" element={<Project />} />
			</Routes>
		</AnimatePresence>
	);
};

AppRouter.displayName = 'AppRouter';
AppRouter.defaultProps = {};

export default React.memo(AppRouter);
