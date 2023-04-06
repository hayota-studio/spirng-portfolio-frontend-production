import React from 'react';
import { useNavigate } from 'react-router-dom';

import SNavigateBackButtonView from './SNavigateBackButton.view';

interface IProps {
	readonly theme: 'light' | 'dark';
	readonly navigateTo: string;
}

const SNavigateBackButton: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();

	const onNavigateTo = () => {
		navigate(props.navigateTo);
	};

	return <SNavigateBackButtonView theme={props.theme} onNavigateTo={onNavigateTo} />;
};

SNavigateBackButton.displayName = 'SNavigateBackButton';
SNavigateBackButton.defaultProps = {};

export default React.memo(SNavigateBackButton);
