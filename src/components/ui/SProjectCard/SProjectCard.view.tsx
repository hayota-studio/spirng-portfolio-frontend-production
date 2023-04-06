import React from 'react';

import classes from './SProjectCard.module.scss';

interface IProps {
	readonly projectName: string;
	readonly year: string;
	readonly media: string | undefined;
	readonly category: string | undefined;
}

const SProjectCardView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']}>
			<img
				className={classes['container__img']}
				src={`${process.env.REACT_APP_BACKEND_URL}${props.media}`}
				alt="project"
			/>
			<div className={classes['projectInfo']}>
				<span className={classes['projectInfo__name']}>{props.projectName}</span>
				<span className={classes['projectInfo__category']}>{props.category}</span>
				&nbsp;
				<span className={classes['projectInfo__category']}>{props.year}</span>
			</div>
		</div>
	);
};

SProjectCardView.displayName = 'SProjectCardView';
SProjectCardView.defaultProps = {};

export default React.memo(SProjectCardView);
