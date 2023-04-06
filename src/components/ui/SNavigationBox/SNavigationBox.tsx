import React from 'react';

import SNavigationBoxView from './SNavigationBox.view';

interface IProps {
	readonly projectName: string;
	readonly category: string | undefined;
	readonly year: string;
	readonly onPressNextImageIndex: () => void;
	readonly onPressBackImageIndex: () => void;
}

const SNavigationBox: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<SNavigationBoxView
			projectName={props.projectName}
			category={props.category}
			year={props.year}
			onPressNextImageIndex={props.onPressNextImageIndex}
			onPressBackImageIndex={props.onPressBackImageIndex}
		/>
	);
};

SNavigationBox.displayName = 'SNavigationBox';
SNavigationBox.defaultProps = {};

export default React.memo(SNavigationBox);
