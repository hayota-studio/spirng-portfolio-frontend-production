import React from 'react';
import { Link } from 'react-router-dom';
import SSvg from '../../../ui/SSvg';
import ReactPlayer from 'react-player';

import { concatClasses } from '../../../../utils/component';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-responsive-carousel/lib/styles/carousel.css';

import classes from './Intro.module.scss';
import type { IProjectsList, IVideosList } from '../../../../interfaces/responses';

interface IProps {
	readonly projectsList: IProjectsList[];
	readonly currentWebVideoIndex: number;
	readonly currentMobileVideoIndex: number;
	readonly whiteLogosIndexes: number[];
	readonly videosList: IVideosList | null;
}

const IntroView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const brandLogoClasses = false
		? concatClasses(classes, 'brandLogo__icon', 'brandLogo__icon--white')
		: concatClasses(classes, 'brandLogo__icon', 'brandLogo__icon--black');

	const vimeoConfig = {
		preload: true,
		preloadMax: 10,
		iframeParams: {
			'preload': 'auto',
			'data-preload': true,
			'data-preload-hover': true,
		},
	};

	return (
		<div className={classes['container']}>
			<Link to="/menu" className={classes['brandLogo']}>
				<SSvg name="brandLogo" className={brandLogoClasses} />
				<div className={classes['menuContainer']}>
					<SSvg name="humburger" className={classes['menuContainer__icon']} />
					<span className={classes['menuContainer__text']}>Menu</span>
				</div>
			</Link>

			<div className={classes['webVideosContainer']}>
				<ReactPlayer
					className={classes['webVideosContainer__video']}
					url={props.videosList?.attributes.videos.web[props.currentWebVideoIndex]}
					playing
					width="100%"
					height="100%"
					controls={false}
					muted
					loop
					disablePictureInPicture
					preload="auto"
					playsinline
					viemoConfig={vimeoConfig}
					onContextMenu={(e: any) => e.preventDefault()}
				/>
			</div>

			<ReactPlayer
				className={classes['mobileVideos']}
				url={props.videosList?.attributes.videos.mobile[props.currentMobileVideoIndex]}
				playing
				width="100%"
				height="100%"
				controls={false}
				muted
				loop
				disablePictureInPicture
				preload="auto"
				playsinline
				viemoConfig={vimeoConfig}
				onContextMenu={(e: any) => e.preventDefault()}
			/>
		</div>
	);
};

IntroView.displayName = 'IntroView';
IntroView.defaultProps = {};

export default React.memo(IntroView);
