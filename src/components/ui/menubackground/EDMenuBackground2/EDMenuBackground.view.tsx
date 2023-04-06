import React from 'react';

import classes from './EDMenuBackground.module.scss';

interface IProps {
	className?: string;
}

const EDMenuBackgroundView2: React.FC<IProps> = () => {
	return (
		<div className={classes['containerNoise']}>
			<div className={classes['bg']}>
				<span className={classes['firstCircle']} />
				<span className={classes['secondCircle']} />
			</div>
		</div>
	);
};

EDMenuBackgroundView2.displayName = 'EDMenuBackgroundView2';
EDMenuBackgroundView2.defaultProps = {};

export default React.memo(EDMenuBackgroundView2);
