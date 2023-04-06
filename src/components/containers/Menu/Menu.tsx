import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MenuView from './Menu.view';

interface IProps {
	readonly projectsRef: React.MutableRefObject<HTMLDivElement | null>;
}

const Menu: React.FC<IProps> = () => {
	const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
	const nevigate = useNavigate();

	const onPressNextImageIndexBg = () =>
		setSelectedImageIndex((prev) => {
			if (prev === 3) {
				return 0;
			} else {
				return prev + 1;
			}
		});

	useEffect(() => {
		const interval = setInterval(() => {
			onPressNextImageIndexBg();
		}, 5000);
		return () => clearInterval(interval);
	}, [onPressNextImageIndexBg]);

	const onNevigateToHome = () => nevigate('/');

	const onNevigateToWorks = () => {
		nevigate('/works');
		// setTimeout(() => {
		// 	props.projectsRef.current && props.projectsRef.current.scrollIntoView({ behavior: 'smooth' });
		// }, 500);
	};
	const onNevigateToAbout = () => nevigate('/about');
	const onNevigateToContact = () => nevigate('/contact');

	return (
		<MenuView
			selectedImageIndex={selectedImageIndex}
			onNevigateToHome={onNevigateToHome}
			onNevigateToWorks={onNevigateToWorks}
			onNevigateToAbout={onNevigateToAbout}
			onNevigateToContact={onNevigateToContact}
			onPressNextImageIndexBg={onPressNextImageIndexBg}
		/>
	);
};

Menu.displayName = 'Menu';
Menu.defaultProps = {};

export default React.memo(Menu);
