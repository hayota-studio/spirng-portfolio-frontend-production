import React from 'react';

import classes from './EDMenuBackground.module.scss';

interface IProps {}

const EDMenuBackgroundView: React.FC<IProps> = () => {
	return (
		<div className={classes['containerNoise']}>
			<div className={classes['bg']}>
				<span className={classes['firstCircle']} />
				<span className={classes['secondCircle']} />
			</div>
		</div>
	);
};

EDMenuBackgroundView.displayName = 'EDMenuBackgroundView';
EDMenuBackgroundView.defaultProps = {};

export default React.memo(EDMenuBackgroundView);
