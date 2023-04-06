import React from 'react';

import SProjectCardView from './SProjectCard.view';

interface IProps {
	readonly projectName: string;
	readonly year: string;
	readonly media: string | undefined;
	readonly category: string | undefined;
}

const SProjectCard: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<SProjectCardView
			projectName={props.projectName}
			year={props.year}
			media={props.media}
			category={props.category}
		/>
	);
};

SProjectCard.displayName = 'SProjectCard';
SProjectCard.defaultProps = {};

export default React.memo(SProjectCard);
