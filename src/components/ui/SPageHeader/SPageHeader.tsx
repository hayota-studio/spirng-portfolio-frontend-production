import React from 'react';

import SPageView from './SPageHeader.view';

interface IProps {
	readonly navigateTo: string;
	readonly theme?: 'light' | 'dark';
}

const SPageHeader: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <SPageView navigateTo={props.navigateTo} theme={props.theme} />;
};

SPageHeader.displayName = 'SPageHeader';
SPageHeader.defaultProps = {};

export default React.memo(SPageHeader);
