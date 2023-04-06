import React from 'react';
import { motion } from 'framer-motion';

import SSvg from '../../ui/SSvg';
import SPageHeader from '../../ui/SPageHeader';
import type { IAboutContent } from '../../../interfaces/responses';

import classes from './About.module.scss';

interface IProps {
	readonly aboutContent: IAboutContent | null;
}

const AboutView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const header = props.aboutContent?.attributes.header;
	const description = props.aboutContent?.attributes.description;
	const imageUrl = props.aboutContent?.attributes.media.data.attributes.url;

	const transition = {
		duration: 0.5,
		ease: 'easeInOut',
		type: 'tween',
	};

	return (
		<motion.section
			className={classes['container']}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={transition}
		>
			<SPageHeader navigateTo="/menu" />
			<div className={classes['innerAbout']}>
				<div className={classes['aboutContainer']}>
					<div className={classes['location']}>
						<SSvg name="arrowRight" className={classes['location__icon']} />
						<span className={classes['location__text']}>about</span>
					</div>
					<div className={classes['contentContainer']}>
						<img
							className={classes['contentContainer__img']}
							src={`${process.env.REACT_APP_BACKEND_URL}${imageUrl}`}
							alt="about"
						/>
						<div className={classes['locationWeb']}>
							<SSvg name="arrowRight" className={classes['locationWeb__iconWeb']} />
							<span className={classes['locationWeb__textWeb']}>about</span>
						</div>
						<div className={classes['innerContent']}>
							<h2 className={classes['innerContent__header']}>{header}</h2>
							<p className={classes['innerContent__description']}>{description}</p>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

AboutView.displayName = 'AboutView';
AboutView.defaultProps = {};

export default React.memo(AboutView);
