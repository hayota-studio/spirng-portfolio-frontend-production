import React from 'react';

import { concatClasses } from '../../../utils/component';
import SSvg from '../SSvg';

import classes from './SNavigateBackButton.module.scss';

interface IProps {
	readonly theme: 'light' | 'dark';
	readonly onNavigateTo: VoidFunction;
}

const SNavigateBackButtonView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<button className={classes['container']} type="button" onClick={props.onNavigateTo}>
			<SSvg
				className={concatClasses(
					classes,
					'container__text',
					props.theme === 'light' ? 'container__icon--light' : 'container__icon--dark',
				)}
				name="arrowLeft"
			/>
			<span
				className={concatClasses(
					classes,
					'container__text',
					props.theme === 'light' ? 'container__text--light' : 'container__text--dark',
				)}
			>
				back
			</span>
		</button>
	);
};

SNavigateBackButtonView.displayName = 'SNavigateBackButtonView';
SNavigateBackButtonView.defaultProps = {};

export default React.memo(SNavigateBackButtonView);
