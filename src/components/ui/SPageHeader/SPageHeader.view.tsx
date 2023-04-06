import React from 'react';

import SNavigateBackButton from '../SNavigateBackButton';
import SSvg from '../SSvg';

import classes from './SPageHeader.module.scss';

interface IProps {
	readonly navigateTo: string;
	readonly theme?: 'light' | 'dark';
}

const SPageHeaderView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']}>
			<div className={classes['container__backButton']}>
				<SNavigateBackButton theme={props.theme ?? "dark"} navigateTo={props.navigateTo} />
			</div>
			<div className={classes['brandLogo']}>
				<SSvg name="brandLogo" className={classes['brandLogo__icon']} style={{fill: props.theme === 'light' ? "#FFFFFF": "#000000"}}  />
			</div>
			<div>
				<SSvg className={classes['rightSide__brandLogo']} name="brandSmallLogo" style={{fill: props.theme === 'light' ? "#FFFFFF": "#000000"}} />
			</div>
		</div>
	);
};

SPageHeaderView.displayName = 'SPageHeaderView';
SPageHeaderView.defaultProps = {};

export default React.memo(SPageHeaderView);
