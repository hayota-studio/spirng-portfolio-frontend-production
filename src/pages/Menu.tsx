import React from 'react';

import Menu from '../components/containers/Menu';

interface IProps {
	readonly projectsRef: React.MutableRefObject<HTMLDivElement | null>;
}

const MenuPage: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <Menu projectsRef={props.projectsRef} />;
};

MenuPage.displayName = 'MenuPage';
MenuPage.defaultProps = {};

export default MenuPage;
