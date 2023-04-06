import React from 'react';

import Main from '../components/containers/Main';

interface IProps {
	readonly projectsRef: React.MutableRefObject<HTMLDivElement | null>;
}

const MainPage: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <Main projectsRef={props.projectsRef} />;
};

MainPage.displayName = 'MainPage';
MainPage.defaultProps = {};

export default MainPage;
